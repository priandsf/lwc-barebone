import { LightningElement, api } from 'lwc';

const PRODUCTS = [
    {id: 1, description: 'A nice TV', price: 800},
    {id: 2, description: 'A crappy phone', price: 50},
    {id: 3, description: 'A good tablet', price: 450}
]

export default class Repeated extends LightningElement {
    static renderMode = 'light';

    @api item;

    clickCount = 0;

    connectedCallback() {
        this.addEventListener( 'repeated_item', e=> {
            e.detail.value = this.item;
            e.stopPropagation()
        });
    }

    onclick() {
        this.clickCount++;
    }

    get items() {
        return PRODUCTS;
    }
}