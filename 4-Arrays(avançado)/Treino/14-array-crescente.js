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
function bubbleDois(items){
    for(let last = items.length; last > 0; last--){
        for(let j = 0; j < last; j++){
            if(items[j] > items[j+1]) [items[j], items[j+1]] = [items[j+1], items[j]]
        }
    }
    return items
}

function bubbleTres(items) {
    let swap;
    let last = items.length - 1
    do {
        swap = false
        for(let i = 0; i < last; i++){
            if(items[i] > items[i+1]){
                [items[i], items[i+1]] = [items[i+1], items[i]]
                swap = true
            }
        }
        last --;
    } while(swap)
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
console.log('Lista inicial:', lista)
console.log('Bubble não otimizado:', bubbleUm(lista))
console.log('Bubble otimizado:', bubbleDois(lista))
console.log('Bubble Ultra otimizado:', bubbleTres(lista))
