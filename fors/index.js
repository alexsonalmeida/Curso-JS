//navegando por um array e um objeto com o for in
const cores = ['preto', 'azul', 'branco', 'cinza']

for (let index in cores) {
    console.log(cores[index])
}

const pessoa = {
    nome: 'Fulano',
    sobrenome: "De tal",
    idade: 23
}

for (let key in pessoa) {
    console.log(pessoa[key])
}

//navegando por um array com o for of - Essa estrutura só funciona em uma estrutura iteravel
for (let cor of cores) {
    console.log(cor)
}