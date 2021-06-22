/**Exercício Array 06: Crie um programa que tenha um array com várias palavras (não usar acentos). Depois disso, você deve mostrar, para cada palavra, quais são as suas vogais */
const palavras = ['Aprender', 'Programar', 'Estudar', 'JavaScript']
let vogais = []

for(palavra of palavras){
    vogais = []
    for(let i = 0; i < palavra.length ; i++){
        if(palavra[i] === 'a' || palavra[i] === 'A'){
            vogais.push(palavra[i])
        }
        if(palavra[i] === 'e' || palavra[i] === 'E'){
            vogais.push(palavra[i])
        }
        if(palavra[i] === 'i' || palavra[i] === 'I'){
            vogais.push(palavra[i])
        }
        if(palavra[i] === 'o' || palavra[i] === 'O'){
            vogais.push(palavra[i])
        }
        if(palavra[i] === 'u' || palavra[i] === 'U'){
            vogais.push(palavra[i])
        }
    }
    console.log(`Na palavra ${palavra} temos ${vogais}`)
}