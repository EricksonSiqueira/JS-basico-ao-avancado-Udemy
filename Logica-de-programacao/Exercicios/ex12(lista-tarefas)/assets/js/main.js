const botaoAdd = document.querySelector('.adicionar')
const txtAdcionar = document.querySelector('.add-tarefa-txt')
const lista = document.querySelector('.tarefas')
let tarefas = []
let botoes = []
let contTarefas = 0

// botão adicionar
botaoAdd.addEventListener('click', function (e){
    adicionaTarefa()
})

function adicionaTarefa () {
    // criando o elemento do txt
    tarefas.push(document.createElement('li'))
    tarefas[contTarefas].innerHTML = `${txtAdcionar.value}`
    tarefas[contTarefas].classList.add(`txt-${contTarefas}`)
    // criando o botão de apagar ao lado do txt
    botoes.push(document.createElement('button'))
    botoes[contTarefas].innerHTML = 'Apagar'
    botoes[contTarefas].classList.add(`botao-${contTarefas}`)
    // adicionando a lista
    lista.appendChild(tarefas[contTarefas])
    tarefas[contTarefas].appendChild(botoes[contTarefas])
    contTarefas += 1
}