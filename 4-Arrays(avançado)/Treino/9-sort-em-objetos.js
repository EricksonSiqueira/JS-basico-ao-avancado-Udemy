const empregados = [
    {nome: 'Erickson', salario: 9500, nascimento: '10 março 1998'},
    {nome: 'Anna', salario: 12500, nascimento: '13 fevereiro 2001'},
    {nome: 'Junin', salario: 10500, nascimento: '16 agosto 1997'}
]

empregados.sort(function (x ,y){ 
   return y.salario - x.salario //ordem decrescente
   //return x.salario - y.salario // ordem crescente
})
console.log(empregados)

const empregados2 = [
    {nome: 'Erickson', salario: 9500, nascimento: '10 março 1998'},
    {nome: 'Anna', salario: 12500, nascimento: '13 fevereiro 2001'},
    {nome: 'Junin', salario: 10500, nascimento: '16 agosto 1997'}
]

empregados2.sort(function (a, b) {
    let x = a.nome.toUpperCase()
    let y = b.nome.toUpperCase()

    return x == y ? 0 : x > y ? 1 : -1 // retorno em ordem alfabética
    //return x == y ? 0 : x > y ? -1 : 1  retorno em ordem não alfabética
})
console.log(empregados2)

