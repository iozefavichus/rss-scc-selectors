import './main.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const TEXT = '';
const CssClasses = {
    ORDER: 'order',
};

export default class Order {
    elementCreator: ElementCreator;

    constructor() {
        this.elementCreator = this.createView();
    }

    getHtmlElement(): HTMLElement {
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