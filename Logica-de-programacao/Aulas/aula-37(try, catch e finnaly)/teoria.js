/*try {
    //executado quando não há erros
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou um erro')
    console.log('Fechei o arquivo')

    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro')
    } finally {
        console.log('Também sou finally')
    }
} catch (e) {
    //executado quando há erros
    console.log('Tratando o erro.')
} finally {
    // Sempre é executado
    console.log('FINALLY: Eu sempre sou executado')
}*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.')
    }
    if (!data) {
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
} catch(error) {
    //Tratar o erro
} finally {
    console.log('Tenha um bom dia.')
}

