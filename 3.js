import { LightningElement, api } from 'lwc';
import opportunityObject from '@salesforce/schema/Opportunity'
import Nome from '@salesforce/schema/Opportunity.Name';
import CloseDate from '@salesforce/schema/Opportunity.CloseDate';
import StageName from '@salesforce/schema/Opportunity.StageName';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


/**
 * Creates Account records.
 */
export default class OpportunityCreator extends LightningElement {
    
    opportunityObject = opportunityObject;
    nameField = Nome;
    CloseDateField = CloseDate;
    StageNameField = StageName;    

    @api recordId

    handleOpportunityCreated(event){
        

        console.log(event.detail);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Parabéns!',
                message: 'Registro criado com sucesso!',
                variant: 'success',
            }))

        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
       
    }
    
    handleError(event){
        console.log(event.detail);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: event.detail.message,
                variant: 'error',
            }),
        );
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
