import { LightningElement, api } from 'lwc';

const UNKNOWN = {id: 0, description: 'unknown', price: 0}

export default class DataProvider extends LightningElement {
    static renderMode = 'light';

    @api product = UNKNOWN;

    connectedCallback() {
        const event = new CustomEvent('repeated_item', {
            bubbles: true,
            detail: {
                value: undefined
            }
        })
        this.dispatchEvent(event);
        this.product = event.detail.value || UNKNOWN;
    }
}
