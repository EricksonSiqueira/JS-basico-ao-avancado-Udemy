/*const tresHoras = 60*60*3*1000
const umDia = 60 * 60 * 24 * 1000
//const data = new Date(2019, 3, 20, 15, 14, 27) ano , mes , dia , hora , minuto, segundo , milesegundo
const data = new Date('2019-04-20 20:20:59.870')
console.log(data.toString())
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()+1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 = domingo. 6 - sábado
console.log(data.toString())
*/

function zeroAEsquerda (num) {
    return num >=10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate()) 
    const mes = zeroAEsquerda(data.getMonth() + 1) 
    const ano = zeroAEsquerda(data.getFullYear()) 
    const hora = zeroAEsquerda(data.getHours()) 
    const minuto = zeroAEsquerda(data.getMinutes()) 
    const segundo = zeroAEsquerda(data.getSeconds()) 
    const milisegundo = zeroAEsquerda(data.getMilliseconds()) 
    const diaDaSemana = zeroAEsquerda(data.getDay()) 

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
    
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)