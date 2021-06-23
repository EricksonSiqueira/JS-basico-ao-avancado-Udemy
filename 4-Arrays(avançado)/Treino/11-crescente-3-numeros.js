function crescenteTres(array) {
    let arr = []
    if(array[0] > array[1] && array [0] > array[2]){
        arr.splice(arr.length, 0, array[0])

        if (array[1] < array[2]) arr.splice(0, 0, array[1], array[2])
        else arr.splice(0, 0, array[2], array[1])

    } else if (array[1] > array[0] && array[1] > array[2]){
        arr.splice(arr.length, 0, array[1])

        if(array[0] < array[2])arr.splice(0, 0, array[0], array[2]) 
        else arr.splice(0, 0, array[2], array[0])

    } else {
        arr.splice(arr.length, 0, array[2])
        if(array[0] < array[1])arr.splice(0, 0, array[0], array[1])
        else arr.splice(0, 0, array[1], array[0])
    }

    return arr
}

console.log(crescenteTres([3, 0, 1]))