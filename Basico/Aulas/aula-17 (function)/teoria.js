/*function saudacao(nome){
    return `Oi ${nome}, bom dia.`
}

const variavel = saudacao('Erickson')
console.log(variavel)*/

function soma (x = 0, y = 0) { //exigindo 2 parametros para a função funcionar
    const resultado = x + y //somando os valores
    return resultado //retornando o resultado
}

console.log(soma(10,12)) //chamando a função com 2 parametros
const resultado = soma(16,4) //tudo que está na função é separado do resto
console.log(resultado)

//Outras formas de declarar a função

const raiz = function (n){
    return n**(1/2)
}
console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

// Modo mais moderno

const raiz2 = n => n**(1/2) //arrow function

console.log(raiz2(36))
console.log(raiz2(49))
console.log(raiz2(64))