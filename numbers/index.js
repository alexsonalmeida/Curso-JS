//definindo a precisão de um número com o método toFixed() - Ele arredonda automaticamente passando 0
let num = 12.46771812
console.log(num.toFixed(0))

//verificando se um número é inteiro
console.log(Number.isInteger(num))

//verificando se uma variável é NaN
console.log(Number.isNaN(num))

//arredondando um número para baixo, para cima e para o inteiro mais próximo com o objeto Math
let num1 = Math.floor(num)
console.log(num1)

num1 = Math.ceil(num)
console.log(num1)

num1 = Math.round(num)
console.log(num1)

//pegando o maior e o menor número de uma sequência de números com o objeto Math
console.log(Math.max(2, 1, 7, 15, 9, 8, 4))
console.log(Math.min(2, 1, 7, 15, 9, 8, 4))

//criando um número aleatório entre 1 e 100 com o método random() do objeto Math
let numA = Math.round(Math.random() * (100 - 1) + 1)
console.log(numA)