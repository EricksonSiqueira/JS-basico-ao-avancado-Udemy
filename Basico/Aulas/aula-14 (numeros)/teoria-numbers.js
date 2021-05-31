//IEEE 754-2008

let num1 = 10
let num2 = 10.277853454123324

console.log(num1.toString() + num2.toString())
console.log(typeof(num1))

console.log(num1.toString(2)) // 2 mostra a representação binária

console.log(num2.toFixed(2)) // fixa em 2 casas e arredonda

console.log(Number.isInteger(num1)) // verifica se o número é inteiro

console.log(Number.isNaN(num2)) //verifica se o parámetro é NaN

let num3 = 0.7
let num4 = 0.1
let num5 = num3 + num4 + num4 + num4

console.log(num5) //tem uma certa imprecisão

num5 = parseFloat(num5.toFixed(2)) //resolvendo a imprecisão
console.log(num5)


