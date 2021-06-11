const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const reiniciar = document.querySelector('.reiniciar')
let data = new Date('01-01-1970 00:00:00')
let t;
let segundos = 60000 * 60 * 3 // contador pra hora ficar em 00:00:00 certinho

function mostraHora() { // retorna a hora atual do objeto data
    return data.toLocaleTimeString({
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

function timer() { //faz o timer adicionar 1 segundo ao html do relogio a cada 1 segundo
    t = setInterval(function () {
        segundos += 1000
        data.setTime(segundos)
        relogio.innerHTML = mostraHora()
    }, 1000)
}
function stopTimer() { // função usada para parar o timer
    clearInterval(t) 
}

iniciar.addEventListener('click', function (event) { // botão de iniciar
    stopTimer()
    timer()
    relogio.style.color = 'green'
})
pausar.addEventListener('click', function (event) { //botão de pausar
    stopTimer()
    relogio.style.color = 'red'
})

reiniciar.addEventListener('click', function (event) { //botão de resetar
    relogio.style.color = 'black'
    stopTimer()
    data = new Date('01-01-1970 00:00:00')
    relogio.innerHTML = mostraHora()
    segundos = 60000 * 60 * 3
})

