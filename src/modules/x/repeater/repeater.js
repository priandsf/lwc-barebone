import { LightningElement } from 'lwc';

const PRODUCTS = [
    {id: 1, description: 'A nice TV', price: 800},
    {id: 2, description: 'A crappy phone', price: 50},
    {id: 3, description: 'A good tablet', price: 450}
]

export default class Repeater extends LightningElement {
    static renderMode = 'light';

    clickCount = 0;

    onclick() {
        this.clickCount++;
    }

    get items() {
        return PRODUCTS;
    }
}