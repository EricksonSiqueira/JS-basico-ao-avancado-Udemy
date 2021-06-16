// Função construtora -> objetos
// Função fabrica -> objetos
// Consrtutora -> Pessoa (new)
function Pessoa (nome, sobrenome) {
    // Privadas
    const ID = 123456;

    const metodoInterno = () => {
        console.log('É um metodo interno')
    }

    // Publicos
    //this. deixa o metodo ou atribúto público
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = 23;

    this.metodo = () => {
        console.log(this.nome + ': sou um método')
    };
}
// new -> cria um objeto vazio e faz o this apontar pro objeto vazio e retorna a variável
const p1 = new Pessoa('Erickson', 'Siqueira')
const p2 = new Pessoa('Anna', 'Paula')
console.log (p1.idade)
