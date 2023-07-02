import './scrollbar.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const CssClasses = {
    SCROLL: 'scrollbar'
};


export default class Scroll{
    elementCreator: ElementCreator;
    // viewport: Element;

    constructor() {
        // this.viewport = container.querySelector('.viewport');
        this.elementCreator = this.createView();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getHtmlElement(): any {
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



