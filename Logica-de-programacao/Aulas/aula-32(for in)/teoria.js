const frutas = [
    'Maça',
    'Pera',
    'Uva'
]
//For normal
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
//For in lê os índices do vetor ou chaves do objeto
for (let i in frutas) {
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Erickson',
    sobrenome: 'Siqueira',
    idade: 23
}
for (let chave in pessoa){
    console.log(`${chave.toUpperCase()}: ${pessoa[chave]}`)
}
