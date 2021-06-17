function fibonnaci (){
    let f0 = 0
    let f1 = 1
    let fibo = []
    let fi
    fibo.push(f0)
    fibo.push(f1)

    for(let i = 2; i < 10; i++){
        fi = f1 + f0
        fibo.push(fi)
        f0 = f1
        f1 = fi
    }
    return fibo
}
console.log(fibonnaci())
