function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Erickson', 'Siqueira', 23) //passando os argumentos para os parametros
const pessoa2 = criaPessoa('Anna', 'Paula', 21)

console.log(pessoa2.sobrenome)

const pessoa3 = {
    nome: 'Erickson',
    sobrenome: 'Siqueira da Silva',
    idade: 24,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} ${this.idade}`) // this referencia a algum atributo do objeto
    },
    incrimentaIdade (){
        this.idade++
    },
    idadeAtual(){
        console.log(`A minha idade atual é ${this.idade}`)
    }

}

pessoa3.fala()
pessoa3.incrimentaIdade()
pessoa3.incrimentaIdade()
pessoa3.idadeAtual()