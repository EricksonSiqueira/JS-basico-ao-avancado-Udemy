function contaPalavras(string){
    let frase = string.split(' ')
    let palavras = ''
    for(palavra of frase){
        palavras += palavra
    }
    return palavras.length
}
console.log(contaPalavras('Erickson    '))
