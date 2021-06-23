function crescenteDois(array){
    let arr = []
    if(array[0] > array[1]){
        arr.splice(0, 0, array[1], array[0])
        return arr
    }
    return array
}

console.log(crescenteDois([200, 8]))