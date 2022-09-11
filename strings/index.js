//mostrando como aceitar caracteres reservados em uma string com a \
let caracter = "Um teste com \"aspas\""
console.log(caracter)

//string é iterável, pegando determinado caractere com o [i] - retorna undefined quando não tiver valor na posição
console.log(caracter[5])

//pegando um elemento i de uma string com a função charAt() - retorna caracter vazio quando não tiver valor na posição
console.log(caracter.charAt(5))

//formas de concatenação
console.log(caracter.concat(' em', ' javascript'))
console.log(caracter + ' em javascript')
console.log(`${caracter} em javascript`)

//buscando o indice onde começa a string passada com o indexOf() - retorna -1 se não achar a string passada como parâmetro
//a função lastIndexOf() funciona de forma semelhante, porém começa de trás pra frente
console.log(caracter.indexOf("m", 6))

//substituindo um texto por outro com a função replace()
console.log(caracter.replace("teste", "experimento"))

//tamanho de uma string com o atributo lenght
console.log(caracter.length)

//cortando uma string com a função slice() e substring()
console.log(caracter.slice(3, 9))
console.log(caracter.slice(-17, -12))

console.log(caracter.substring(3, 9))
console.log(caracter.substring(caracter.length - 17, caracter.length - 12))

//separando uma string em indices de array conforme parametro passado - o parametro nunca é incluído
console.log(caracter.split(' ', 3))

//deixando tudo maiusculo ou minusculo com toUpperCase() e toLowerCase()
console.log(caracter.toUpperCase())
console.log(caracter.toLowerCase())