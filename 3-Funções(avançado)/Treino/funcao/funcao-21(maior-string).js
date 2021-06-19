function maiorStringArray(arr) {
    let maior = arr[0]
    for(valor of arr){

        if(valor.length > maior.length) maior = valor

    }
    return maior
}
console.log(maiorStringArray(['Sao Paulo', 'Rio de Janeiro', 'Amazonas', 'Pernambuco', 'Santa',
'Catarina', 'Rio Grande do Norte', 'Sergipe']))
