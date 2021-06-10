const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const reiniciar = document.querySelector('.reiniciar')
let data = new Date('01-01-1970 00:00:00')
let t;
let cont = 60000 * 60 * 3
//const dataZero = () => {return data = new Date('01-01-1970 00:00:00')}

function mostraHora() {
    return data.toLocaleTimeString({
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}


function timer() {
    t = setInterval(function () {
        cont += 1000
        data.setTime(cont)
        relogio.innerHTML = mostraHora()
    }, 1000)
}
function stopTimer() {
    clearInterval(t)
}

iniciar.addEventListener('click', function (event) {
    timer()
    relogio.style.color = 'green'
})
pausar.addEventListener('click', function (event) {
    stopTimer()
    relogio.style.color = 'red'
})

reiniciar.addEventListener('click', function (event) {

})

