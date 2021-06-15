//IIFE -> Immediately invoked function expression
//Função anônima
(function(idade, peso, altura){
    function printa (string){
        console.log(`${string}`)
    }
    const criaEstrutura = (nome, sobrenome) => {return `Nome: ${nome} ${sobrenome}\nIdade: ${idade}\nPeso: ${peso}\nAltura: ${altura}`}

    printa(criaEstrutura('Erickson', 'Siqueira da Silva'))
})(23, 71, 1.76); // coloca tudo entre parêntese e coloca () no final para chamar a função

const nome = 'Anna'