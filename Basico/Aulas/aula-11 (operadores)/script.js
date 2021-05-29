/**
 * Aritméticos
 * Adição/Concatenação     +
 * Potenciação            **
 * Resto da divisão        %
 * 
 */

const num1 = 5
const num2 = 10
console.log (num1 - num2)

/**
 * Precedência (PEMDAS)
 * 1-    ()
 * 2-    **
 * 3-   * / %
 * 4-    + -
 */

let contador = 1
contador++; //pós incremento
++contador; //pre incrimento
--contador //pre decremento
contador-- //pós decremento

console.log(contador++)
console.log(contador)


// Operador de atribuição
contador += 2 //contador = contador + 2
contador -= 3 //contador = contador -3
contador *= 10 //contador = contador * 10
console.log(contador)

// NaN -> Nota a number
let num4 = 2
let num5 = parseInt('5') //passa para inteiro
let num6 = parseFloat('5.2') //passa para float
let num7 = Number('5.324') // transforma em número (mais simples) 
console.log(num4 * num5)