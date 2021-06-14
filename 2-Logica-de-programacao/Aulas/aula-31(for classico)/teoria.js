/*console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')
console.log('Linha 6')
console.log('Linha 7')* */

for (let i = 100; i >= -100; i -= 10) {
    console.log(`Linha ${i}`)
}
// Par ou impar
for (let i =0; i <= 10; i++) {
    const par = i % 2 === 0? 'Par' : 'Impar'
    console.log(i, par)
}

//Percorrendo array
const frutas = ['Maça', 'Pêra', 'Uva', 'Banana', 'Kiwi', 'Limão']
for (let i = 0; i < frutas.length; i++) {
    console.log(`${frutas[i]}`)
}
