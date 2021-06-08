/**
 * For clássico - Geralmente con iteráveis (array e strings)
 * For in - Retorna o indice ou chave (array, strings e objetos)
 * For of - Retorna o valor em sí (iteraveis, arrays e strings)
 */

const nomes = ['Erickson', 'Siqueira', 'João']

/*for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}
*/
// for in pega o indice somente
for (let i in nomes){
    console.log(nomes[i])
}
console.log('------------------------')

// for of pega o valor e não o índice
for (let valor of nomes){
    console.log(valor)
}
console.log('------------------------')
// função for each
nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array)
});

const pessoa = {
    nome: 'Erickson',
    sobrenome: 'Siqueira'
}
for (let i in pessoa){
    console.log(i, pessoa[i])
}

// for of não funciona com objetos
for (let i of pessoa){
    console.log(i)
}