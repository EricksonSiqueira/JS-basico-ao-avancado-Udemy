let pessoa = {
    nome: 'Anna',
    sobrenome: 'Paula',
    idade: 20,
    endereco: {
        municipio: 'Rio de Janeiro',
        bairro: 'Big field',
        rua: 'Paulada',
        numero: 123

    }
}

let {nome: n, sobrenome: sb, idade, ...end} = pessoa
console.log(`Nome completo: ${n} ${sb}\nIdade: ${idade}
Municipio:${end.endereco.municipio}
Bairro: ${end.endereco.bairro}
Rua: ${end.endereco.rua}
Numero: ${end.endereco.numero}`)
