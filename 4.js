import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class lwc_maneiro_ex04 extends LightningElement {

    //método que deverá ser acionado em caso de sucesso na criação do registro
    handleSuccess(event) {
        const recordId = event.detail.id;

        /**montar uma const com o evento e seus parametros */
        const toastEvent = new ShowToastEvent({
            title: 'Parabéns!',
            message: 'O Lead foi criado com sucesso!',
            variant: 'success'
        });

        //dispara o evento
        this.dispatchEvent(toastEvent);
        console.log('Id da Conta' + this.recordId);

        /** realizar o direcionamento*/
        if (this.recordId) {
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'Lead',
                    actionName: 'view'
                }
            });
        }
    }
    //limpa os campos do formulário
    handleReset() {
        //seleciona todos os elementos lightning-input-field
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );

        //se possuir dados, para cada campo aplicar o reset
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
}
