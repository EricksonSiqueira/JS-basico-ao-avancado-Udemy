const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const reiniciar = document.querySelector('.reiniciar')


function timer (){
    const data = new Date('01-01-1970 00:00:00')

    relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

iniciar.addEventListener('click', function (event){
    timer()
})
pausar.addEventListener('click', function (event){
    window.alert('Cliquei no botão pausar')
})

reiniciar.addEventListener('click', function (event){
    window.alert('Cliquei no botão reiniciar')
})

