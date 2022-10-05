//Criando classes em JavaScript
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    comer() {
        console.log(`${this.nome} esta comendo`)
    }

    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

const p1 = new Pessoa("Fulano", "de Tal")
p1.falar()
p1.comer()

//Trabalhando com heranca em JavaScript
class Eletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + " já ligado")
            return
        }

        console.log("Ligando " + this.nome)
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + " já desligado")
            return
        }

        console.log("Desligando " + this.nome)
        this.ligado = false        
    }
}

class Smartphone extends Eletronico {
    constructor(nome, modelo) {
        super(nome)
        this.modelo = modelo
        this.wifi = false
    }

    ligarWifi() {
        if (this.wifi) {
            console.log(this.modelo + " já está com o wifi ligado")
            return
        }
        
        console.log("Ligando wifi")
        this.wifi = true
    }
}

const e1 = new Eletronico("Tablet")
const s1 = new Smartphone("Samsung", "s22")

e1.desligar()
s1.desligar()
e1.ligar()
s1.ligar()
e1.desligar()
s1.ligarWifi()
s1.ligarWifi()