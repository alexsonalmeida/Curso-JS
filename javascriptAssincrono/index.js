const criaRand = () => {
    const interval = Math.random() * (5000 - 1000) + 1000
    return Math.floor(interval)
}

//Trabalhando com promises
function esperador(msg, timer = 0) {
    console.log("realizando os testes")
    
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject("Erro, tipo de dado inválido")
            console.log("A função não morre no reject")
        }
        setTimeout(() => {
            resolve(msg)
        }, timer)
    })
}

esperador("teste inicial", criaRand())
.then(resultado => {
    console.log(resultado)
    return esperador("teste secundario", criaRand())
})
.then(resultado => {
    console.log(resultado)
    return esperador("último teste", criaRand())
})
.then(resultado => {
    console.log(resultado)
    return esperador(true)
})
.then(resultado => {
    console.log(resultado)
})
.catch(err => {
    console.log(err)
})