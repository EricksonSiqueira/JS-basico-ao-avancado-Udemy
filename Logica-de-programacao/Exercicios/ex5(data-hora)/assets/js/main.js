const data = new Date()

function setH1(texto) {
    const h1 = document.querySelector('.data-hora')
    h1.innerHTML = ''
    h1.innerHTML = texto
}
function getDayWeek() {
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

function getMonthTxt() {
    const mes = data.getMonth()

    switch (mes) {
        case 0:
            return 'Janeiro'
        case 1:
            return 'Fevereiro'
        case 2:
            return 'Março'
        case 3:
            return 'Abril'
        case 4:
            return 'Maio'
        case 5:
            return 'Junho'
        case 6:
            return 'Julho'
        case 7:
            return 'Agosto'
        case 8:
            return 'Setembro'
        case 9:
            return 'Outubro'
        case 10:
            return 'Novembro'
        case 11:
            return 'Dezembro'
        default:
            return -1
    }

}
setH1(`${getDayWeek()}, ${getMonthTxt()}`)