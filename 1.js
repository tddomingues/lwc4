import { LightningElement } from 'lwc';

export default class Lw4Um extends LightningElement {
    numb1 = ""
    numb2 = ""
    resultado = ""

    handleChange(event){
        const campo = event.target.name
        if(campo === 'numb1') {
            this.numb1 = Number(event.target.value)
        } else if (campo === 'numb2') {
            this.numb2 = Number(event.target.value)
        }
    }

    handleChangeClickSom() {
        this.resultado = this.numb1 + this.numb2
    }

    handleChangeClickSubt() {
        this.resultado = this.numb1 - this.numb2
    }

    handleChangeClickMult() {
        this.resultado = this.numb1 * this.numb2
    }

    handleChangeClickDiv() {
        if (this.numb2 === 0) {
            alert("Não é possível dividir por zero")
            this.resultado = "Erro!"
        } else {
            this.resultado = this.numb1 / this.numb2
        }
    }

}
