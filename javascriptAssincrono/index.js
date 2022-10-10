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
            return
        }
        setTimeout(() => {
            resolve('Resultado: ' + msg)
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

//Retornando uma unica promise com Promise.all() - Se cair no catch, ele só retorna o erro
const promises = [
    'Teste 1',
    esperador('Teste 2', criaRand()),
    esperador('Teste 3', criaRand()),
    'Teste final'
]

Promise.all(promises)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

//Pegando a promise que resolver mais rápido com o Promise.race() - Só cai no catch se a primeira que for resulvida der reject
const promises2 = [
    esperador('Candidato 1', criaRand()),
    esperador('Candidatp 2', criaRand()),
    esperador('Candidato 3', criaRand()),
    esperador('Candidato 4', criaRand())
]

Promise.race(promises2)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

//Tratando de retornar uma promesa resolve ou reject diretamente como Promise.resolve() e Promise.reject()
function baixarPagina() {
    const emCache = true
    
    if (emCache)  return Promise.resolve("Página em cache") 
    return esperador("Página baixada", criaRand())
}

baixarPagina()
    .then(msg => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })

//Lidando com async e await
async function assinc() {
    try {
        const fase1 = await esperador('Teste 1', criaRand())
        console.log(fase1)

        const fase2 = await esperador('Teste 2', criaRand())
        console.log(fase2)

        const fase3 = await esperador('Tetste 3', criaRand())
        console.log(fase3) 
        
        const fase4 = await esperador(false, criaRand())
        console.log(fase4)     
    }
    catch (err) {console.log(err)}
}

assinc()