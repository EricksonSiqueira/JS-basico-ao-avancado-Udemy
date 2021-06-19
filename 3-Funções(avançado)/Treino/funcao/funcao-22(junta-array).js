function juntaArrays(arr1, arr2) {
    let juntos = arr1

    for(valor of arr2){
        juntos.push(valor)
    }
    return juntos
}
console.log(juntaArrays([10, 20, 30], [40, 50 ,60]))
