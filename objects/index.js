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