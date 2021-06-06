const pessoa = {
    nome: 'Erickson',
    sobrenome: 'Siqueira',
    idade: 23,
    endereco: {
        rua:'Rua Alberto',
        numero: 355
    }

}
//              valor padrão            chave   nome
const { nome = 'Não existe', sobrenome, idade:  teste, endereco: {rua: r = 'Rua inexistente', numero}} = pessoa // atribuição via desestruturação

console.log(nome, sobrenome, teste, r, numero)

const loja = {
    nome: 'Supermarket',
    funcionarios: 20,
    local: {
        municipio: 'Realengo',
        bairro: 'Santa Rosa',
        rua: 'Ermelina',
        numero: '768'
    }
}
//                                  pega o resto
const {nome: nomezada, funcionarios, ...resto} = loja

console.log(`Nome: ${nomezada} \nQuantidade de funcionarios: ${funcionarios} \nEndereço:`, resto)
