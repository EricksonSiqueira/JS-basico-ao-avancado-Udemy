let numeros = [1000, 2000, 3000, 4000, 5000]
numeros.push(6000)
let [um, dois, tres, ...resto] = numeros //precisa falar o tipo de variável antes de declarar as novas

console.log(um, dois, tres, resto)

let letras = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]

let [, dois2, , quatro] = numeros
let [ , [ ,d, f], [, , i]] = letras
console.log(letras[1][2])
console.log(quatro, dois2)
console.log(f, d, i)

