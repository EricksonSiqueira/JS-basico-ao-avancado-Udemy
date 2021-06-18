function criaCalculadora (){
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes(); // tem que usar o this para acessar o metodo interno
            this.pressEnter();
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) { // da pra usar arrow function e não precisar do bind
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne()
                }
                
                if(el.classList.contains('btn-eq')){
                    this.calc()
                }
            }.bind(this)); // bind(this) fala pra função usar o this do pai
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        },

        clearDisplay() {
            this.display.value = ''
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },
        pressEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.calc()
                }
            })
        },

        calc() {
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()
