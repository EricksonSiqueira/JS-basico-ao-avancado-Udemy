/**
 * Primitivos - string, number, boolean, undefined, null (bigint, symbol)
 * 
 * Referência - Array, Object , Function
 */

let a = [1, 2, 3]
let b = a // referencia a mesmo local na memoria

let c = [...a] // isso faz uma cópia, não referencia

console.log(a, b)

a.push(4) // a e b apontam pro mesmo lugar, então isso também adiciona o 4 em b

console.log(a, b)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Siqueira'
}

const copia = {...pessoa} // copia verdadeira
pessoa.nome = 'Erickson'
console.log(pessoa)
console.log(copia)
