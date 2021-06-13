const txtAdcionar = document.querySelector('.add-tarefa-txt')
const lista = document.querySelector('.tarefas')
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
    const tarefa = document.createElement('li')
    const botao = document.createElement('button')
    // criando o elemento do txt
    tarefa.innerHTML = `${txtAdcionar.value}`
    tarefa.classList.add(`txt`)
    tarefa.classList.add(`t${contTarefas}`)
    // criando o botão de apagar ao lado do txt
    botao.innerHTML = 'Apagar'
    botao.classList.add(`apagar`)
    botao.classList.add(`b${contTarefas}`)
    // adicionando a lista
    lista.appendChild(tarefa)
    tarefa.appendChild(botao)
    contTarefas++
    txtAdcionar.value = ''
}

function apagar (botao){
    const txt = document.querySelector(`.t${botao[1]}`)
    lista.removeChild(txt)
}