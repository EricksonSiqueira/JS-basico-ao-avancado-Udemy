const img = document.querySelector('.btn-mode')

document.addEventListener('click', (e) => {
    const el = e.target
    const conteudo = document.querySelector('.conteudo')
    const botao = document.querySelector('.button-mode')

    if (el.classList.contains('btn-mode')) {
        if (conteudo.classList.contains('light')) {
            conteudo.classList.remove('light');
            conteudo.classList.add('dark');
            img.setAttribute('src', '../botao-darkmode/imgs/sun-icone.png')
            botao.style.backgroundColor = 'white'
            botao.style.border = '1px solid grey'
        } else if(conteudo.classList.contains('dark')) {
            conteudo.classList.remove('dark');
            conteudo.classList.add('light');
            img.setAttribute('src', '../botao-darkmode/imgs/moon-icone.png')
            botao.style.backgroundColor = 'black'
        }

    }
})
