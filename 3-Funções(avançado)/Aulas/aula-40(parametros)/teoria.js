//Só válido para declarações com function
function funcao(a, b, c) {// mesmo se enviar argumentos a variável arguments mantém todos
    console.log(arguments[0]) //variável arguments salva todos os argumentos num vetor
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(0, 1, 2, 3, 4, 5, 6, 7, 8)

function soma(a = 0, b = 0) {// valor padrão
    console.log(a + b)
}
soma(2)

// Parametro por desestruturação
function montaNome({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}
montaNome({ nome: 'Erickson', sobrenome: 'Siqueira', idade: 23 })

// mandando o objeto
const obj = {
    nome: 'Anna',
    sobrenome: 'Paula',
    idade: 20
}
montaNome(obj)

// enviando por vetor
function vetor([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
vetor(['Erickson', 'Siqueira', '23'])

function conta(operador, acumulador, ...numeros) { //... = rest operador (pega todo o resto) sempre é o último
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }

    console.log(acumulador)
}
conta('/', 1, 20, 30, 40, 50)

const conta2 = function (operador, acumulador, ...numeros) {
    console.log(arguments)
};
conta2('+', 2, 3, 70, 80)

//criando o args com rest operator para ter todos os valores
const conta3 = (...args) => {
    console.log(args)
}
conta3(10, 20, 30, 60, 100)