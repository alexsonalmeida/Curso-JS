const array = ['Fulano', 'de', 'Tal']
console.log(array)

//Pegando a quantidade de elementos de um vetor como o atributo lenght
console.log(`Quantidade de elementos do vetor: ${array.length}`)

//Copiando um novo array sem referencia com spread operator
const array2 = [...array]
delete array2[2]
console.log(array2)

//Cortando um array com base em determinado item com slice()
console.log(array2.slice(0,2))
console.log(array2)

//Removendo elementos do final de um array com pop()
array.pop()
console.log(array)

//Removendo elementos do inicio de um array com shift() - tanto shift() quanto pop() retornam o elemento removido
array.shift()
console.log(array)

//Adicionando elementos no final de um array com push()
array.push("Tal")
console.log(array)

//Adicionando elementos no inicio de um array com unshift()
array.unshift("Fulano")
console.log(array)

//Convertendo uma string em um array com o split()
const nome = "Beltrano de Tal"
const array3 = nome.split(" ")
console.log(array3)

//Convertendo um array em uma string com o join()
const nome2 = array3.join("-")
console.log(nome2)

//Manipulando determinados elementos de um array com splice() - splice(index, delete, value1, value2, ...)
array3.splice(array3.length, 0, "da", "Silva")
console.log(array3)

//pop()
array3.splice(-1, 1)
console.log(array3)

//push()
array3.splice(array3.length, 0, "Silva")
console.log(array3)

//shift()
array3.splice(0, 1)
console.log(array3)

//unshift()
array3.splice(0, 0, "Ciclano")
console.log(array3)

//Concatenando arrays com concat()
const a1 = [1, 2, 3, 4]
const a2 = [5, 6, 7]
const a3 = a1.concat(a2, 8, 9, "Lucas")
console.log(a3)

//Concatenando arrays com spread operator
const arr1 = [2, 4, 6, 8]
const arr2 = [10, 12, 14]
const arr3 = [...arr1, ...[20, 30], ...arr2, "Ciclano"]
console.log(arr3)

//Filtrando arrays com determinada condicao com filter()
const valores = [21, 14, 17, 28, 34, 15, 26, 40, 31, 13, 29, 18]

//Imaginando como idades, pegando as pessoas com idade maior ou igual a 18 anos
const maioresIdade = valores.filter((valor) => {
    return valor >= 18
})
console.log(maioresIdade)
//Pegando apenas numeros pares do array
const pares = valores.filter(valor => valor % 2 == 0)
console.log(pares)

//Pegando e alterando valores de um array com map()
const valores1 = [12, 7, 6, 13, 27, 12, 29, 24, 68, 65, 19, 30]

const sucessores = valores1.map((valor) => {
    return valor + 1
})
console.log(sucessores)

//Usando map() em objetos
const funcionarios = [
    {nome: "Fulano", idade: 18, salario: 1200.50},
    {nome: "Ciclano", idade: 25, salario: 3500.00},
    {nome: "Beltrano", idade: 30, salario: 6000.00}
]

//Alterando o array original
const salariosAtualizados = funcionarios.map((obj) => {
    obj.salario += obj.salario * 8 / 100
    return obj
})
console.log(salariosAtualizados)

//Sem alterar o array original
const salariosAtualizados2 = funcionarios.map((obj) => {
    const novoObjeto = {...obj}
    novoObjeto.salario += Number((novoObjeto.salario * 4 / 100).toFixed(2))
    return novoObjeto
})
console.log(salariosAtualizados2)

//Reduzindo um array a um unico valor com reduce()
const valores2 = [12, 7, 6, 13, 27, 12, 29, 24, 68, 65, 19, 30]

const somaPares = valores2.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador += valor
    return acumulador
}, 0)
console.log(somaPares)