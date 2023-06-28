import './main.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const TEXT = 'Select the plates';
const CssClasses = {
    ORDER: 'order',
};

export default class Order {
    elementCreator: ElementCreator;

    constructor() {
        this.elementCreator = this.createView();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getHtmlElement(): any {
        return this.elementCreator.getElement();
    }

    createView() {
        const params: ElementsParams ={
            tag: 'h2',
            classNames: [CssClasses.ORDER],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);

        return elementCreator;
    }
}