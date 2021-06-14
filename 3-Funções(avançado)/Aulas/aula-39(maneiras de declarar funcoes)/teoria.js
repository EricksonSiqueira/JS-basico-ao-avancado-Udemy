//Declaração de função (Function hoisting)
falaOi() //chamando antes de criar (hoisting)
function falaOi(){
    console.log('Oi')
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado')
}
//Posso passar uma função como parametro de outro função
function executaFuncao (funcao) {
    console.log('Vou executar sua função abaixo')
    funcao() // chamando a função que eu passei
}
executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto eu posso ter uma função
const obj = {
    falar: function(){
        console.log('Estou falando...')
    },
    falar2(){
        console.log("Estou falando de novo...")
    }
}
obj.falar()
obj.falar2()
