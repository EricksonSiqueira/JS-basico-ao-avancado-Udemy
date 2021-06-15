const nome = 'Erickson'

function falaNome() { // função conhece tudo que está nos vizinhos dela
    const nome = 'Anna' // ela pega a primeira variável que ela achar
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'Junior'
    falaNome()
}
usaFalaNome()
