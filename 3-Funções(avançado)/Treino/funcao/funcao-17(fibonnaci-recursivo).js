function fibonnaciRecursivo(n) { 
    if (n === 1){
        return 1
    }
    if (n === 2){
        return 2
    }

    if(n <= 10){
        return fibonnaciRecursivo(n-1) + fibonnaciRecursivo(n-2)// chama as funções até elas chegarem no valor n === 1 e n === 2  e vai fazendo a cadeia reversa é a definição matematica
    }
}

console.log(fibonnaciRecursivo(9))