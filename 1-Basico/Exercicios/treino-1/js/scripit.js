

function escopo () {
    const section = document.body.querySelector('.sec1')

    const respostas = document.body.querySelector('#respostas')

    const pessoas = []

    function enviar (evento){
        evento.preventDefault()

        const nome = section.querySelector('#nome')
        const sobrenome = section.querySelector('#sobrenome')
        const peso = section.querySelector('#peso')
        const altura = section.querySelector('#altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }) 
        console.log(pessoas)

        respostas.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value}kg ${altura.value}m</p>`
    }

    section.addEventListener('submit', enviar)

}
    escopo()