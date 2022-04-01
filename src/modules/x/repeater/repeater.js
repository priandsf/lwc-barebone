import { LightningElement, api } from 'lwc';

export default class Repeater extends LightningElement {
    static renderMode = 'light';

    @api products;

    get items() {
        return this.products || []
    }

    connectedCallback() {
        this.addEventListener( 'repeated_item', e=> {
            e.detail.value = this.findItem(e.target) ;
            e.stopPropagation()
        });
    }

    findItem(e) {
        for( ; e && e!=this; e=e.parentNode) {
            const attr = e.attributes && e.attributes.getNamedItem("data-index")
            if(attr) {
                return this.items[parseInt(attr.value)];
            }
        }
    }
}
