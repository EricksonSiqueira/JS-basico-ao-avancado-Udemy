const pessoas = [
    {nome: 'Erickson', sobrenome: 'Siqueira da Silva', idade: 16},
    {nome: 'Anna', sobrenome: 'Paula Souza de Santos', idade: 20},
    {nome: 'Ana', sobrenome: 'Lúcia de Melo Siqueira da Silva', idade: 51},
    {nome: 'Ladimir', sobrenome: 'dos Santos da Silva', idade: 13},
    {nome: 'Rogério', sobrenome: 'Pereira Pontes', idade: 17},
    {nome: 'Marco', sobrenome: 'Antônio Braga Junior', idade: 24},
    {nome: 'Samuel', sobrenome: 'Silva de Brito', idade: 23},
    {nome: 'Ana', sobrenome: 'Silveira Pontes', idade: 14},
]

const pessoasMaioresDe18 = pessoas.filter(obj => obj.idade >= 18)
const pessoasMenoresDe18 = pessoas.filter(obj => !(obj.idade >= 18))
const sobrenomeSilva = pessoas.filter(obj => obj.sobrenome.toLowerCase().indexOf('silva') > -1 )
const sobrenomePontes = pessoas.filter(obj => obj.sobrenome.toLowerCase().indexOf('pontes') > -1)
const sobrenomeSilvaMenoresDe18 = pessoas.filter(obj => obj.sobrenome.toLowerCase().indexOf('silva') > -1 && obj.idade < 18)
console.log(sobrenomeSilvaMenoresDe18)
