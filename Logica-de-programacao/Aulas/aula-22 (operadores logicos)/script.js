/**
 * Operadores lógicos
 *  && -> AND -> E -> Todas as expressões tem que ser verdadeiras para retornar true
 * || -> OR -> OU  -> 
 * ! -> NOT -> NÃO -> Operador de negação */
const expressaoAnd = true && true && true && true
const expressaoOr = false || false || false || true

const usuario = 'Erickson'
const senha = '123456'

const vaiLogar = usuario === 'Erickson' && senha === '123456'
//console.log(vaiLogar)

console.log(!false)