function mediaArray (ar){
    let total = 0
    for(let valor of ar){
        total += valor
    }
    return ((total)/ar.length)
}

let array = [10, 20, 20, 40, 10]
console.log(mediaArray(array))