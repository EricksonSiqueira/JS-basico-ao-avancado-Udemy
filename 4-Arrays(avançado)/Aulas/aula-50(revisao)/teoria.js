// String, Objetos, Funções e Números
//const nomes = new Array('Eduardo', 'Maria', 'Joana')  construtor do proprio array
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes // apontam pro mesmo índice
const novo2 = [...nomes] // spread, não aponta para o mesmo local na memória
nomes[2] = 'João'
novo.pop() // tira do novo e do nomes
console.log(nomes)
console.log(novo2)

const removido = novo2.shift() // tirando do inicio e colocando na variável
console.log(novo2, removido)

novo2.push('Erickson') // adiciona no final
console.log(novo2)

novo2.unshift('Anna')// adiciona no inicio
console.log(novo2)

console.log(novo2.slice(1, 3)) // fatiando do 1 até o 2

console.log(novo2.slice(0, -2))// tira os 2 primeiros

const nome = 'Erickson Siqueira da Silva'
const nomes2 = nome.split(' ') // separa a string por espaço
console.log(nomes2)

const nomes3 = nomes2.join(' ')// juntando a string com espaço entre elas
console.log(nomes3)
