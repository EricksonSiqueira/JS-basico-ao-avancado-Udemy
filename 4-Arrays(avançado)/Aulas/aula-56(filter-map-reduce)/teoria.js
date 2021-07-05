// Retorna a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (soma tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27];
const numerosPares = numeros.filter(valor => valor % 2 === 0)
console.log(numerosPares)