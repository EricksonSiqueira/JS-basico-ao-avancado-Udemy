function Calculadora() {

    const display = document.querySelector('.display');

    this.inicia = () => {
        cliqueBotoes(); // tem que usar o this para acessar o metodo interno
        pressEnter();
    };

    let cliqueBotoes = () => {
        document.addEventListener('click',(e) => { // da pra usar arrow function e não precisar do bind
            const el = e.target

            if (el.classList.contains('btn-num')) btnParaDisplay(el.innerText);

            if (el.classList.contains('btn-clear')) clearDisplay()

            if (el.classList.contains('btn-del')) deleteOne();

            if (el.classList.contains('btn-eq')) calc();
        });
    };

    const btnParaDisplay = (valor) => {
        display.value += valor;
        display.focus();
    };

    const clearDisplay = () => display.value = ''

    const deleteOne = () => display.value = display.value.slice(0, -1)

    const pressEnter = () => {
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) calc()
        })
    };

    let calc = () => {
        let conta = display.value;

        try {
            conta = (eval(conta)).toFixed(2)

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    }
};


const calculadora = new Calculadora();
calculadora.inicia()
