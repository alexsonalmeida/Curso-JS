function contar() {
    var ini = window.document.getElementById('txti')
    var fin = window.document.getElementById('txtf')
    var pas= window.document.getElementById('txtv')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        var i = Number(ini.value)
        var f = Number(fin.value)
        var v = Number(pas.value)
        if (v <= 0 ) {
            window.alert('Passo inválido! Considerando passo 1')
            v = 1
        }
        if (i < f) { //Contagem crescente!
            for (c = i ; c <= f ; c += v) {
                res.innerHTML += `passo ${c}, `
        }
        } else { //Contagem decrescente!
            for (let c = i; c >= f; c -= v) {
                res.innerHTML += `Passo ${c}, `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
function limpar() {
    var res = window.document.getElementById('res')
    res.innerHTML = ``
}






