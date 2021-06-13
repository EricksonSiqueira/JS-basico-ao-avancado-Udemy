function relogio() {
    const relogio = document.querySelector('.relogio')
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

    document.addEventListener('click', function (e) {
        const el = e.target

        if (el.classList.contains('iniciar')) {
            stopTimer()
            timer()
            relogio.style.color = 'green'
        }
        if (el.classList.contains('pausar')) {
            stopTimer()
            relogio.style.color = 'red'
        }
        if (el.classList.contains('reiniciar')) {
            relogio.style.color = 'black'
            stopTimer()
            data = new Date('01-01-1970 00:00:00')
            relogio.innerHTML = mostraHora()
            segundos = 60000 * 60 * 3
        }
    })
}
relogio();
