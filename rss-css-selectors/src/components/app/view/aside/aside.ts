// import View from '../view';
import './aside.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const CssClasses = {
    ASIDE: 'aside',
};
const TEXT = '';

export default class AsideView{
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
            tag: 'aside',
            classNames: [CssClasses.ASIDE],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);

        return elementCreator;
    }
}

