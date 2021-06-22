/**Exercício Array 02: Crie um array preenchida com os 20 primeiros colocados da 
 * Tabela do Campeonato Brasileiro de Futebol, na ordem de colocação. Depois mostre:
a) Os 5 primeiros times.
b) Os últimos 4 colocados.
c) Times em ordem alfabética. 
d) Em que posição está o time da Chapecoense. */

const times = ['Atlético-PR', 'Atlético-MG', 'Fortaleza', 'Bragantino', 'Palmeiras', 'Fluminense', 'Bahia', 'Atlético-GO', 'Santos', 'Flamengo', 'Corinthians', 'Ceára SC', 'Internacional', 'Juventude', 'Sport Recife', 'Cuiabá', 'São Paulo' ,'Chapecoense', 'América-MG', 'Grêmio']

const top5 = times.slice(0, 5)
console.log(`Os 5 primeiros times são: ${top5}.`)

const rebaixados = times.slice(16, 20)
console.log(`Os times que estão no rebaixamento são: ${rebaixados}.`)

const timesOrdemAlfabetica = [...times]
console.log('Times em ordem alfabética',timesOrdemAlfabetica.sort())

console.log(`Chapecoense está na ${times.indexOf('Chapecoense')+1}° posição`)