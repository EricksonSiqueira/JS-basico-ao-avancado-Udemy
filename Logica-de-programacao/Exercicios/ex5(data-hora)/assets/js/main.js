function setH1 (texto) {
    const h1 = document.querySelector('.data-hora')
    h1.innerHTML = ''
    h1.innerHTML = texto
}
function getDayWeek (){
    const data = new Date()
    const diaSemana = data.getDay()

    switch (diaSemana) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5: 
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
        default:
            return -1
    }

}
setH1(`${getDayWeek()}`)