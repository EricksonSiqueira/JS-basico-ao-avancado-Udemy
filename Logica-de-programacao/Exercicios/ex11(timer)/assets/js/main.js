const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const reiniciar = document.querySelector('.reiniciar')
let data = new Date('01-01-1970 00:00:00')
//const dataZero = () => {return data = new Date('01-01-1970 00:00:00')}

function mostraHora() {
    return data.toLocaleTimeString({
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

function setRelogio(data) { relogio.innerHTML = mostraHora(data) }

function timer(bool) {
    let cont = 60000 * 60 * 3
    timer = setInterval(function () {
        relogio.style.color = 'black'
        cont += 1000
        data.setTime(cont)
        relogio.innerHTML = mostraHora(data)
    }, 1000)


}

iniciar.addEventListener('click', function (event) {
    timer(true)
})
pausar.addEventListener('click', function (event) {
    timer(false)
})

reiniciar.addEventListener('click', function (event) {

})

