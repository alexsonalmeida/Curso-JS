//Declarando funcoes tradicionais (ocorre hoisting)
function fala1() {
    console.log("Falando 1")
}

fala1()

//Passando uma funcao como parametro - funcoes sao first class object
function chamaFala1(funcao) {
    console.log("Aqui é a função que recebe parâmetro:")
    funcao()
}

chamaFala1(fala1)

//Declarando funcoes atraves de function expression - Dar nome a funcao nao e obrigatorio
const fala2 = function() {
    console.log("Falando 2")
}

fala2()

//Declarando funcoes com arrow functions
const fala3 = () => {
    console.log("Falando 3")
}

fala3()

//Metodos em objetos
const pessoa = {
    nome: "Lucas",
    cumprimentar() {
        console.log(`Oi, meu nome é ${this.nome}`)
    }
}

pessoa.cumprimentar()

//Funcoes callback
const criaRand = () => {
    const interval = Math.random() * (5000 - 1000) + 1000
    return Math.floor(interval)
}

const f1 = callback => {
    setTimeout(() => {
        console.log("Funcao 1")
        if (callback) callback()
    }, criaRand())
}

const f2 = callback => {
    setTimeout(() => {
        console.log("Funcao 2")
        if (callback) callback()
    }, criaRand())
}

const f3 = callback => {
    setTimeout(() => {
        console.log("Funcao 3")
        if (callback) callback()
    }, criaRand())
}

f1(() => {
    f2(() => {
        f3(() => console.log("Terminei"))
    })
}) 

f1(f1Callback)

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
   f3(f3Callback)
}

function f3Callback() {
    console.log("Terminei")
}

//IIFE Immediately Invoked Function Expression
(function(idade, peso) {
    console.log("Nada declarado aqui vazará ao escopo global")
    console.log(`A idade da pessoa é ${idade} e ela pesa ${peso}kg`)
})(19, 54)

//Factory functions
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        peso: peso,
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },
        get imc() {
            return (peso / altura ** 2).toFixed(2)
        }
    }
}

const p1 = criaPessoa("Lucas", "Braga", 1.67, 56)
console.log(p1)

//Constructor functions
function Pessoa(nome, sobrenome) {
    //Atributo privado -> const
    const id = 12345
    this.nome = nome
    this.sobrenome = sobrenome

    this.falaNome = () => {
        console.log(`Olá, meu nome é ${nome} ${sobrenome}`)
    }
}

const p2 = new Pessoa("Luiz", "Santos")
p2.falaNome()

//Generator functions - Ao utilizar return, nenhum yield posterior sera executado
function* geradora1() {
    yield "Valor 1"
    yield "Valor 2"
    yield "Valor 3"
}

const g1 = geradora1()

console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().done)

function* geradora2() {
    yield 0
    yield 1
    yield 2   
}

function* geradora3() {
    yield* geradora2()
    yield 3
    yield 4
    yield 5
}

const g2 = geradora3()

for (let valor of g2) {
    console.log(valor)
}