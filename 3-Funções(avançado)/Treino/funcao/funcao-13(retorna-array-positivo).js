function arrayPositivo (ar){
    let arPos = []
    
    for (let valor of ar){
        if(valor >= 0){
            arPos.push(valor)
        }
    }
    return arPos
}
console.log(arrayPositivo([-40, -50, 10, 20, -2]))
