function arrayContrario(array) {
    let arr = []
    let j = 0
    for(let i = array.length - 1; i > -1 ; i--){
        arr[j] = array[i]
        j++
    }
    return arr
}
const numeros = arrayContrario([0, 1, 2, 3, 4, 5])
console.log(numeros.join(' '))
