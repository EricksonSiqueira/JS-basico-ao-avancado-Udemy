const txtAdcionar = document.querySelector('.add-tarefa-txt')
const lista = document.querySelector('.tarefas')
let contTarefas = 0

// eventListener global
document.addEventListener('click', function (e) {
    const el = e.target
    //botao adicionar
    if (el.classList.contains('adicionar')) {
        if (txtAdcionar.value === '') {
            window.alert('Digite algo para adicionar a tarefa')
            return;
        } adicionaTarefa(txtAdcionar.value)
    }
    //botao apagar
    if (el.classList.contains('apagar')) {
        apagar(el.classList.item(1))
    }
})

txtAdcionar.addEventListener('keypress', function (e) {
    if(e.keyCode === 13){
        if (txtAdcionar.value === '') {
            window.alert('Digite algo para adicionar a tarefa')
            return;
        } adicionaTarefa(txtAdcionar.value)
    }
})

function adicionaTarefa(textoInput) {
    const tarefa = document.createElement('li')
    const botao = document.createElement('button')
    // criando o elemento do txt
    tarefa.innerHTML = textoInput
    tarefa.classList.add(`txt`)
    tarefa.classList.add(`t${contTarefas}`)
    // criando o botão de apagar ao lado do txt
    botao.innerHTML = 'Apagar'
    botao.classList.add(`apagar`)
    botao.classList.add(`b${contTarefas}`)
    botao.setAttribute('title', 'Apagar tarefa')
    // adicionando a lista
    lista.appendChild(tarefa)
    tarefa.appendChild(botao)
    contTarefas++
    txtAdcionar.value = ''
    salvarTarefas()
}

function apagar(botao) {
    const txt = document.querySelector(`.t${botao[1]}`)
    lista.removeChild(txt)
    salvarTarefas()
}

function salvarTarefas(){
    const liTarefas = lista.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        console.log(tarefaTexto)
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas (){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (let tarefa of listaDeTarefas){
        adicionaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()