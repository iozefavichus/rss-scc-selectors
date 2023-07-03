import './scrollbar.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const CssClasses = {
    SCROLL: 'scrollbar'
};


export default class Scroll{
    elementCreator: ElementCreator;

    constructor() {
        this.elementCreator = this.createView();
    }

    getHtmlElement(): HTMLElement {
        return this.elementCreator.getElement();
    }

    createView() {
        const params: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.SCROLL],
            textContent: ''
        };
        const elementCreator = new ElementCreator(params);
        return elementCreator;
    }
}



