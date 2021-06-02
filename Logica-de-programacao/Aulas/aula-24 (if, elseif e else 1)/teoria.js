//IF pode ser usado sozinho
//Sempre que ultilizo ELSE/ELSE IF preciso de um IF antes
//Eu posso ter infinitos else if
//Só posso ter um else

const hora = 11

if (hora >= 0 && hora < 6){
    console.log('Boa madrugada')
}

else if (hora >= 6 && hora <= 11){
    console.log('Bom dia')
}
else if (hora >= 12 && hora <=17){
    console.log('Boa tarde')
}

else if (hora > 17 && hora <23) {
    console.log('Boa noite')
}
else {
    console.log('Olá, horário inválido.')
}
 