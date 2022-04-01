import { LightningElement } from 'lwc';


const PRODUCTS = [
    {id: 1, description: 'A nice TV', price: 800},
    {id: 2, description: 'A crappy phone', price: 50},
    {id: 3, description: 'A good tablet', price: 450}
]


export default class App extends LightningElement {
    static renderMode = 'light';

    products = PRODUCTS;

    clickCount = 0;

    onclick() {
        this.clickCount++;
    }

    onpush() {
        const p = {id: this.products.length+1, description:'Dynamically added', price: 99}
        this.products.push(p)
        this.clickCount++;
    }

    onpop() {
        this.products.pop()
        this.clickCount++;
    }
}