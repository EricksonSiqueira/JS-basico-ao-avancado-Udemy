function fizzBuzz(n) {

    if (typeof (n) === 'number') {
        if (n % 3 === 0 && n % 5 === 0) {
            return 'FizzBuzz'
        } else if (n % 5 === 0) {
            return 'Buzz'
        } else if (n % 3 === 0) {
            return 'Fizz'
        } else {
            return n
        }
    }else {
        return 'NaN'
    }
}

function fizzBuzz2 (numero) {
    if (typeof numero !== 'number') return 'NaN'
    if (numero%3 === 0 && numero%5 === 0) return 'FizzBuzz'
    if (numero%3 === 0) return 'Fizz'
    if (numero%5 === 5) return 'Buzz'
    return numero
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz2(i))
}
