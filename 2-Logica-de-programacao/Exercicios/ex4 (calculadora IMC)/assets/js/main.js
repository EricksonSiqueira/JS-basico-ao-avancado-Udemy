function escopo() {
    const resultado = document.body.querySelector('#resultado')
    const form = document.body.querySelector('.calculo-imc')

    function enviar(evento) {
        evento.preventDefault()

        const pesotxt = document.querySelector('#peso')
        const alturatxt = document.querySelector('#altura')

        const peso = Number(pesotxt.value)
        const altura = Number(alturatxt.value)

        let imc = (peso / (altura * altura)).toFixed(2)

        if (peso < 0 || peso > 400) {
            resultado.innerHTML = 'Peso inválido. Modifique e tente novamente.'
            resultado.style.backgroundColor = ('red')
        } else if (altura < 0 || altura > 3) {
            resultado.innerHTML = 'Altura inválida. Modifique e tente novamente.'
            resultado.style.backgroundColor = ('red')
        } else{
            if (imc < 18.5) {
                resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`
                resultado.style.backgroundColor = ('#50ff9c')
            } else if (imc >= 18.5 && imc < 25) {
                resultado.innerHTML = `Seu IMC é ${imc} (Peso normal)`
                resultado.style.backgroundColor = ('#50ff9c')
            } else if (imc >= 25 && imc < 30) {
                resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`
                resultado.style.backgroundColor = ('#50ff9c')
            } else if (imc >= 30 && imc < 35) {
                resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`
                resultado.style.backgroundColor = ('#50ff9c')
            } else if (imc >= 35 && imc < 40) {
                resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`
                resultado.style.backgroundColor = ('#50ff9c')
            } else if (imc >= 40) {
                resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`
                resultado.style.backgroundColor = ('#50ff9c')
            } else {
                resultado.innerHTML = `Algo deu errado, tente novamente.`
                resultado.style.backgroundColor = ('red')
            }
        }


    }

    form.addEventListener('submit', enviar)
}

escopo()
