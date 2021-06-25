function validaExpressao(expressao) {
    let stack = []
    for(simbolo of expressao){
        if(simbolo === '(') stack.push('(')
        else if(simbolo === ')'){
            if(stack.length > 0) stack.pop()
            else stack.push(')')
        }
    }

    if(stack.length === 0){
        console.log('Sua expressão é válida')
    }else {
        console.log('Sua expressão não é válida')
    }
}

validaExpressao('(a+b) (a(4+3)*2)(c)')
validaExpressao('(a+b) (a(4+3)*2)c)')