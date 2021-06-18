// lazy evaluiation, avaliação preguiçosa

function* geradora1() {
    // codigo qualquer
    yield 'Valor1'
    // codigo qualquer
    yield 'Valor2'
    // codigo qualquer
    yield 'Valor3'
}

const g1 = geradora1()
/*
console.log(g1.next().value) // primeira vez que chamo vai até o primeiro yeild
console.log(g1.next().value) // começa depois do valor 1 e para no prox yield
console.log(g1.next().value) // começa depois do valor 2 e para no prox yield 
*/

for (let valor of g1){ // ele sabe o tamanho da função então ele retorna até o final
    console.log(valor, 'no for')
}

console.log('################')

function* geradora2() { // função infinita
    let i = 0;
    while(true){
        yield i;
        i++
    }
}

const g2 = geradora2();
// printa um número de cada vez.
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

console.log('#############')

function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){ // continua a função da outra geradora 
    yield* geradora3()
    yield 3
    yield 4
    yield 5

}

const g4 = geradora4()

for(let valor of g4) {
    console.log(valor)
}

console.log('###############')

function* geradora5() {
    yield function() { // passando uma função no yield
        console.log('Vim do y1')
    }

    yield function() {
        console.log('Vim do y2')
    }

    return function() {
        console.log('Vim do return')
    }
 // daqui pra baixo o código fica inútil por que o return encerra a função
    yield function() {
        console.log('Vim do y3')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value
func1()
func2()
func3()