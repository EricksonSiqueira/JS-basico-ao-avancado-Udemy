/**
 * && -> false && true -> false "o valor mesmo"
 * || -> true || false -> retorna o valor verdadeiro
 * 
 * FALSY - Valores que avaliam falso
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */


function falaOi (){
    return 'Oi sou true'
}

const vaiExecutar = "Erisinho"

console.log(vaiExecutar && falaOi())

console.log(0 || false || null || 'Erickson Siqueira' || true) //primeiro verdadeiro é retornado

const a = 0
const b = null
const c = 'false' // retorna isso
const d = false
const e = NaN

console.log(a || b || c || d || e)

