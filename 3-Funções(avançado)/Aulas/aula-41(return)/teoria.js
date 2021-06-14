//Return
// retorna um valor
// termina a função

function soma(a, b) {
    return a + b // retorna valor
}
function soma2(a, b) {
    console.log(a + b) // só printa não retorna nada
}
soma2(5, 2)

/*document.addEventListener('click', function (){
    document.body.style.backgroundColor = 'red' // muda o background e não retorna nada
})*/

// cria objeto 
function criaPessoa (nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criaPessoa('Erickson', 'Siqueira') // atribuindo objeto a variável utilizando a função
const p2 = criaPessoa('Anna', 'Paula')
console.log(p1, p2)

// função dentro de função
function falaFrase (comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá') // Olá = parametro comeco
console.log(olaMundo('Mundo')) // Mundo = parametro resto

//utilidade 
function criaMultiplicador (multiplicador){
    // multiplicador
    return function (n) {
        return n*multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
