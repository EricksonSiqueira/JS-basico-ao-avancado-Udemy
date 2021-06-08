const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for(let p of ps) {
    //background color
    p.style.backgroundColor = backgroundColorBody;
    //color
    p.style.color = 'white';
}
