const txtAdcionar = document.querySelector('.add-tarefa-txt')
const lista = document.querySelector('.tarefas')
let tarefas = []
let botoes = []
let contTarefas = 0

// eventListener global
document.addEventListener('click', function (e){
    const el = e.target
    //botao adicionar
    if (el.classList.contains('adicionar')){
        adicionaTarefa()
    }
    //botao apagar
    if (el.classList.contains('apagar')){
        apagar(el.classList.item(1))
    }
})

function adicionaTarefa () {
    // criando o elemento do txt
    tarefas.push(document.createElement('li'))
    tarefas[contTarefas].innerHTML = `${txtAdcionar.value}`
    tarefas[contTarefas].classList.add(`txt`)
    tarefas[contTarefas].classList.add(`t${contTarefas}`)
    // criando o botão de apagar ao lado do txt
    botoes.push(document.createElement('button'))
    botoes[contTarefas].innerHTML = 'Apagar'
    botoes[contTarefas].classList.add(`apagar`)
    botoes[contTarefas].classList.add(`b${contTarefas}`)
    // adicionando a lista
    lista.appendChild(tarefas[contTarefas])
    tarefas[contTarefas].appendChild(botoes[contTarefas])
    contTarefas += 1
}

function apagar (botao){
    const txt = document.querySelector(`.t${botao[1]}`)
    lista.removeChild(txt)
}