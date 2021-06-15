// Calculado o fatorial de 10 
function fatorial10() {
    let fatorial = 1
    for(let i = 1; i <= 10; i++){
        fatorial *= i
    }
    return fatorial
}
console.log(fatorial10())
