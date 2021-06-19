function primo(n){
    let contPrimo = 0

    if(n < 2){
        return false
    }
    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            contPrimo += 1
        }
        if (contPrimo > 2){
            return false
        }
    }
    return true
}

console.log(primo(4))