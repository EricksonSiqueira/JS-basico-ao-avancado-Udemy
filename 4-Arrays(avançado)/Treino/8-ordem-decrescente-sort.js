const lista = []

for (let i = 0; i < 5; i++) {
    lista.push(Math.round(Math.random() * 10))
}
console.log(lista)
console.log(lista.sort())

lista.sort((a, b) => b-a) // colocando pra ficar descrescente
console.log(lista)
