const elements = [ //vetor com os objetos que quero que sejam adicionados
    {tag:'p', texto:'Frase1'},
    {tag:'div', texto: 'Frase2'},
    {tag:'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'}
]

function creatElement (elemento){ // pega um elemento com tag e texto e joga no html
    const container = document.querySelector('.container')

    container.innerHTML += `<${elemento.tag}> ${elemento.texto} </${elemento.tag}>`
}

