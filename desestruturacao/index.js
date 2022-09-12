//trabalhando com atribuuicao via desestruturacao e rest operator em arrays
const valores = [10, 12, 14, 16, 18, 20, 22, 24, 26]

const [valor1, valor2, ...resto] = valores
console.log(valor1, valor2, resto)

//trabalhando com atribuuicao via desestruturacao e rest operator em objetos
const pessoa = {
    nome: "Arthur",
    sobrenome: "Morgan",
    idade: "46",
    endereco: {
        estado: "Texas",
        pais: "Estados Unidos"
    }
}

const {nome: nomeTeste = "Desconhecido", sobrenome, endereco: {estado}, ...resto1} = pessoa

console.log(nomeTeste, sobrenome, estado, resto1)