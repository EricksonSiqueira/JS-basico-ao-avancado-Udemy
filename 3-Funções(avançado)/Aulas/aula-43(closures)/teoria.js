function retornaFuncao(nome){
    return function (){
        return nome;
    };
}
const funcao = retornaFuncao('Erickson')
const funcao2 = retornaFuncao('Anna')
console.log(funcao)
console.log(funcao2)
console.log(funcao(),funcao2())

