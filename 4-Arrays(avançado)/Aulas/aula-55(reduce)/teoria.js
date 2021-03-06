// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Forma ideial de se usar o reduce
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador += valor
//     return acumulador
// }, 0)
// console.log(total)

//Usando como se fosse filter
// const pares = numeros.reduce(function (acumulador, valor, indice, array)  {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador
// },[])
// console.log(pares)

//Usando como se fosse map
// const dobro = numeros.reduce(function (acumulador, valor, indice, array)  {
//     acumulador.push(valor*2)
//     return acumulador
// }, [])
// console.log(dobro)

const somaPar = numeros.reduce(function(acumulador, valor, indice, array)  {
    if(valor % 2 === 0){
        acumulador += valor
    }
    return acumulador
}, 0)


//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 105},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, obj) {
    if(acumulador.idade < obj.idade) acumulador = obj
    return acumulador
})
console.log(pessoaMaisVelha)