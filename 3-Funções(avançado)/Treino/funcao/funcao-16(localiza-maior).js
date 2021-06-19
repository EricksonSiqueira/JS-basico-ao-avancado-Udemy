function localizaMaior(ar) {
    maior = ar[0]

    for(valor of ar){
        if(valor > maior){
            maior = valor
        }
    }
    return maior
}

console.log(localizaMaior([10, 50, 70, 30, 20 ,15]))
