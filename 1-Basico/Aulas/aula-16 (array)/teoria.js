//                 0       1         2
const alunos = ['Luiz ', 'Maria', 'João']
console.log(alunos)
console.log(alunos[2])
alunos[2] = 'Erickson' // alterando
alunos[alunos.length] = 'Luiza' // adiciona no último elemento

alunos.push('Fábio') // faz a mesma coisa do de cima porém automatico
alunos.unshift('Junior') //aloca no 0 e muda o índice do resto

//removendo
alunos.pop() // remove o ultimo elemento
const removido = alunos.pop() // da pra salvar o elemento eliminado
const removido2 = alunos.shift() //remove o primeiro elemento e salva
console.log(removido, removido2)

delete alunos[1]//deletando mas deixando espaço vazio
console.log(alunos[1])

console.log(alunos)

console.log(alunos.slice(0, -1)) //pegando fatia do array

console.log(typeof(alunos)) // um array é um objeto
console.log(alunos instanceof Array) //perguntando diretamente sobre array