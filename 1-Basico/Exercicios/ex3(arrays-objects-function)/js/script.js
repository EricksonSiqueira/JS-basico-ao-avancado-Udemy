const pessoas = []

function meuEscopo (){
    const form = document.querySelector('.form')
    
    const enviados = document.querySelector('#enviados')

    const pessoas = [];

    /*form.onsubmit = function (evento) {
        alert(1)
        evento.preventDefault() //impedindo que dê f5 na pagina
        console.log(1)
        
    }*/
    function recebeEventoForm (evento) {
        evento.preventDefault()
        const nome = form.querySelector('#nome')
        const sobrenome = form.querySelector('#sobrenome')
        const idade = form.querySelector('#idade')
        const altura = form.querySelector('#altura')

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value
        }

        pessoas.push(pessoa)

        console.log(pessoas)
        
        enviados.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.idade} anos ${pessoa.altura}m</p>`
    }

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo()