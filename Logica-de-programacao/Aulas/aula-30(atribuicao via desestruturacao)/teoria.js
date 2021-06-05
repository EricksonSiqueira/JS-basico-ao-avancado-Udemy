const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

const [um, ,tres, ,cinco, ...resto] = numeros; 
// pega os indices em ordem
// ... pega o que sobrar dentro do array (rest operator)
//... pode ser spread operator
// posso pular indices fazendo , ,

console.log(um, tres, cinco)

const num = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(num[1][2])
const [,[,,seis]] = num
console.log(seis)
