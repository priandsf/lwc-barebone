import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    static renderMode = 'light';

    clickCount = 0;

    onclick() {
        this.clickCount++;
    }
}