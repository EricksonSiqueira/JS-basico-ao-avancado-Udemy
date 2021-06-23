const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(índice, quantidade a ser deletada, elemento1, elemento2, elemento3);
//pop
nomes.splice(-1, 1)

let removidos = nomes.splice(-1, Number.MAX_VALUE) // retorna um array
//                               maior numero do JS
console.log(nomes, removidos)

nomes.splice(2, 0, 'Erickson') // adiciona o elemento no índice passado e sobe+1 no que estava na posição
console.log(nomes)

nomes.splice(1, 1, 'Anna') // Apagando um elemento e colocando outro no lugar
console.log(nomes)

//push
nomes.splice(nomes.length, 0, 'Junior', 'Braga', 'Edesio') // util para adicionar muitos elementos
console.log(nomes)

//unshift
nomes.splice(0, 0, 'Tom', 'Bel')
console.log(nomes)
