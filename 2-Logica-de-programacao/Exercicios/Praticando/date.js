const data = new Date('01-01-1970 00:00:00')
let cont = 63
console.log(data.setTime(1000))

console.log(data.toLocaleTimeString('pt-BR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}))
cont ++
console.log(data.setTime(2000))
console.log(data.toLocaleTimeString('pt-BR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}))