// Retorna as pessoas que tem o nome com 5 letras ou mais
// Retorna as pessoas com mais de 50 anos
// Retorna as pessoas cujo o nome termina com a

const clientes = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Letícia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47},
    
];

const cincoMais = clientes.filter(valor => valor.nome.length >= 5)
const maisDeCinquanteAnos = clientes.filter(valor => valor.idade > 50)
const nomeTerminaComA = clientes.filter(valor => valor.nome[valor.nome.length - 1] === 'a')
const terminaComA = clientes.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(terminaComA)