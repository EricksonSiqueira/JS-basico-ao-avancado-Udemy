// Strings são indexadas
let umaString = 'Um "texto"'

console.log(umaString[1])
console.log(umaString.charAt(6)) //pega o caractere, se tiver fora do range retorna nada
console.log(umaString.concat(' em um lindo dia.')) //concatena
console.log(`${umaString} em um lindo dia.`)
console.log(umaString.indexOf('texto')) //procura o parametro passado e mostra onde começa, se não achar retorna -1
console.log(umaString.lastIndexOf('m', 5)) // parametro e posição que começa, faz a busca de trás pra frente
console.log(umaString.search(/x/)) // procura uma letra mas aceita expressão regular
console.log(umaString.replace(/t/g, '#')) //subistitui um parametro e aceita expressão regular

console.log(umaString.length) // tamanho da string

console.log(umaString.slice(2,10)) // pega uma fatia da string funciona com negativos

console.log(umaString.substring(umaString.length -5, umaString -1)) // faria tbm 

console.log(umaString.split(' ', 2)) //quebra a srting no parametro que vc pedir, segundo parametro é quantas vezes vai fazer isso

console.log(umaString.toUpperCase) // maisculo
console.log(umaString.toLowerCase) // minusculo