function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}



const  timer = setInterval(function () { // repete a função no intervalo passado, corre infinitamente
        console.log(mostraHora())
    }, 1000)


setTimeout(function () { // setTimeOut executa a função pelo tempo passado por parâmetro
    clearInterval(timer)
}, 2000)

setTimeout(function () {
    console.log('Olá mundo')
}, 5000)