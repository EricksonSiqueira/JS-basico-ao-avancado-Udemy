/*const nome = 'Erickson'
let controle = 0 
while (controle <= 10) {
    console.log(controle)
    controle ++ // n pode esquecer de incrementar se não fica infinito
}
controle = 0
while (controle < nome.length) {
    console.log(nome[controle])
    controle ++
} */

function random (min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 1
const max = 50
let rand = random (min, max)
console.log(rand)
// a gente não sabe quando vai acabar
while (rand !== 10) {
    rand = random (min, max)
    console.log(rand)
}

//executa primeiro depois vê a condição
do {
    console.log(`Mesmo sendo ${rand} ele executa uma vez.`)
} while(rand !== 10)
