const extenso = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez',
'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove', 'Vinte']

const pedido = 14;
let numeroPedido;

if (pedido > 20){
    numeroPedido = 'Valor inválido'
}
for (let i = 0; i <= 20; i++){
    if(pedido === i + 1){
        numeroPedido = extenso[i]
    }
}

console.log(numeroPedido)