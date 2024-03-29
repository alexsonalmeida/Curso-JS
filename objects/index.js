//Definindo propriedades em objetos com defineProperty
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome

  Object.defineProperty(this, 'idade', {
      enumerable: true, //Define se a chave sera exibivel
      value: idade,
      writable: false, //Define se o atributo podera ser alterado
      configurable: false //Define se o atributo podera ser congifuravel
  })
}

const p1 = new Pessoa("Fulano", "de tal", 19)
delete p1.idade
p1.idade = 20

console.log(p1)

//Getters e Setters em constructor functions
function Produto(nome, preco = 0) {
  this.nome = nome
  let testePreco = preco

  Object.defineProperty(this, 'preco', {
    enumerable: true,
    configurable: false,
    
    get: () => {
      return testePreco
    },

    set: (preco) => {
      if (typeof preco !== 'number') {
          console.log("Unexpected value")
          return
      }
      testePreco = preco
    }
  })
}

const arroz = new Produto("Arroz")
arroz.preco = true
arroz.preco = 5.78
console.log(arroz.preco)

//Vendo a descricao das propiedades de um objeto com getOwnProperties() - Utilizando o objeto p1
console.log(Object.getOwnPropertyDescriptor(p1, 'nome'))

//Lendo chaves e valores com keys(), values() e entries()
console.log(Object.keys(p1))
console.log(Object.values(p1))
console.log(Object.entries(p1))

//Trabalhando com a propriedade prototype das constructor functions
Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome } ${this.sobrenome}` 
}

const nomeCompleto = p1.nomeCompleto()
console.log(nomeCompleto)

//Setando prototypes de objetos anteriores com setPrototypeOf()
const obj1 = {
  chave1: "valor1"
}

const obj2 = {
  chave2: "valor2"
}

Object.setPrototypeOf(obj2, obj1)
console.log(obj2.chave1)

//Heranca
function Camiseta(nome, preco, tamanho, tecido) {
  Produto.call(this, nome, preco)
  this.tamanho = tamanho
  this.tecido = tecido
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const c1 = new Camiseta("Camiseta branca", 40, "m", "algodao")

console.log(c1)
console.log(c1.preco)

//Polimorfismo - em JavaScript, nao e possivel fazer polimorfismo por sobrecarga, apenas por sobrescrita
function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: R$${this.saldo}`)
    return
  }

  this.saldo -= valor
  this.mostrarDados()
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor
  this.mostrarDados()
}

Conta.prototype.mostrarDados = function() {
  console.log(`agencia/conta: ${this.agencia} / ${this.conta} | saldo: R$${this.saldo}`)
}

const conta1 = new Conta(1111, 1 , 2400)
conta1.sacar(350)
conta1.depositar(200)

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
  if (this.saldo - valor < -this.limite) {
    console.log(`Saldo insuficiente: R$${this.saldo}`)
    return
  }

  this.saldo -= valor
  this.mostrarDados()
}

const cc1 = new ContaCorrente(22222, 2, 1500, 200)
cc1.depositar(400)
cc1.sacar(1600)
cc1.sacar(350)
cc1.sacar(200)

//Prototypes em factory functions
const comer = {
  comer() {
    console.log(`${this.nome} esta comendo`)
  },
}

const andar = {
  andar() {
    console.log(`${this.nome} esta andando`)
  },
}

const cantar = {
  cantar() {
    console.log(`${this.nome} esta cantando`)
  },
}

const pessoaPrototype = Object.assign({}, comer, andar, cantar)

function criaPessoa(nome, sobrenome, idade) {
  return Object.create(pessoaPrototype, {
    nome: {
      value: nome,
      writable: false,
      configurable: false,
      enumerable: true
    },

    sobrenome: {
      value: sobrenome,
      writable: false,
      configurable: false,
      enumerable: true
    },

    idade: {
      value: idade,
      writable: false,
      configurable: false,
      enumerable: true
    }
  })
}

const pessoa = criaPessoa("Fulano", "de Tal", 16)
console.log(pessoa)
pessoa.cantar()