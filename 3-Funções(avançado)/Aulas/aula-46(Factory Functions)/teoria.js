//Factory function (Função fabrica)
// Constructor function (Função construtora)
function criaPessoa (nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(string){
            string = string.split(' ')
            this.nome = string.shift('') // tira o primeiro valor do vetor
            this.sobrenome = string.join(' ') // junta as strings e coloca o valor do parâmetro entre elas
        },

        fala: function (assunto= 'nada'){
            return `${this.nome} está falando sobre ${assunto}.`
        },

        peso: p,
        altura: a,
        //getter
        get imc (){ //forma mais simples de declarar/ get transforma a função em atributo
            return `${((this.peso)/(this.altura**2)).toFixed(2)}`
        }
    };
}

const p1 = criaPessoa('Erickson', 'Siqueira', 1.76, 71);
const p2 = criaPessoa('Anna', 'Paula', 1.53, 50);
console.log(p2.fala('Abudabi'));
console.log(p1.imc)
p1.nomeCompleto = 'Maria Oliveira da Silva'
console.log(p1.nomeCompleto)
console.log(p1.fala())
