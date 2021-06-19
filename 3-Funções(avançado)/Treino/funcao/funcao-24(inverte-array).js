function inverteArray(array) {
    let salva = 0
    let j = array.length - 1 
    for(let i = 0; i < array.length/2; i++){
        salva = array[i] // salva = 0
        array[i] = array[j] // array[0] = 7
        array[j] = salva //array[j] = 0
        j--
    }
    return array
}
console.log(inverteArray([0, 1, 2, 3, 4, 5, 6, 7, 8]))
