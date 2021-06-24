const lista = []
const ordenada = []
let pos
for(let i = 0; i < 5; i++){
    lista[i] = Math.round(Math.random()*10)
}

function bubbleUm(items){
    for(let i = 0; i < items.length; i++){
        for(let j = 0; j < items.length; j++){
            if(items[j] > items[j+1]) [items[j], items[j+1]] = [items[j+1], items[j]]
        }
    }
    return items
}
/** 
for(let i = 0; i < 5; i++){
    if(i === 0 || lista[i] > ordenada[lista.length - 1]) ordenada.push(lista[i])
    else{
        pos = 0
        while (pos < ordenada.length){
            if(lista[i] <= ordenada[pos]){
                ordenada.splice(pos, 0, lista[i])
                break;
            }
            pos += 1
        }
    }
}*/
console.log(lista)
console.log(bubbleUm(lista))
