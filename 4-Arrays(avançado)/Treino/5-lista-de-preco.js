const produtos = ['Lapís', 1.75.toFixed(2), 'Borracha', 2.00.toFixed(2), 'Caderno', (20.00).toFixed(2), 'Estojo', 25.00.toFixed(2), 'Transferidor', '4.20', 'Compasso', 9.99.toFixed(2), 'Mochila', 120.32.toFixed(2), 'Canetas' , 22.30.toFixed(2), 'Livro', 34.90.toFixed(2)]

let j = 1
for(let i = 0; i < produtos.length; i += 2){
console.log(`${produtos[i]}............... $R${produtos[j]}`)
 j += 2
}