// String,  Number. undefined, null, boolean, symbol
const nome = 'Erickson'
const nome1 = 'Erickson'
const nome2 = 'Erickson' //strings

const num1 = 10 //number
const num2 = 7.2 //number

let nomeAluno //Undefined -> Não aponta pra lugar nenhum da memória
const sobrenomeAluno = null // Nulo -> Não aponta pra lugar nenhum da memória

const aprovado = true //Boolean = true, false
const reprovado = false


console.log(typeof(sobrenomeAluno), sobrenomeAluno) //nulo é objeto

const a = [1, 2] //vetor
const b = a //dado por referencia

b.push(3)
console.log(a, b)

