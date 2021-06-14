const elements = [ //vetor com os objetos que quero que sejam adicionados
    {tag:'p', texto:'Frase1'},
    {tag:'div', texto: 'Frase2'},
    {tag:'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'}
]
const container = document.querySelector('.container')
const div = document.createElement('div')
div.classList.add('div1')
container.appendChild(div)

function addElement (elemento, local){ // pega um elemento com tag e texto e joga no html
    const container = document.querySelector(local)

    container.innerHTML += `<${elemento.tag}> ${elemento.texto} </${elemento.tag}>`
}

for (let i = 0; i < elements.length; i++){ // pega todos os elementos do vetor elements
    addElement(elements[i],'.div1')
}

