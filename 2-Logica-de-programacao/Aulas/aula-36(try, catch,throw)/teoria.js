// Não é bom exibir seus erros pro usuário final. Pode ser perigoso.
/*try {
   console.log(naoExisto) 
} catch (error) {
    console.log('naoExisto não existe.')
    console.log(error)
}*/

function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números.') // cria um novo erro com a base do javascript
    }
    return x + y
}
try {
    console.log(soma(1, 'er'))
} catch (error){
    //console.log(error)  pega o erro. mas não é bom mostrar pro usuário
    console.log('Alguma coisa mais amigável')
}

