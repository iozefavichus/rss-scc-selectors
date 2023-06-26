import './footer.css';
// import View from '../view';
import ElementCreator from '../../../utility/element-creator';
// import { ElementsParams, Creator } from '../../../../types/index';

const CssClasses = {
    FOOTER: 'footer',
}
const TEXT = 'Made by @iozefavichus';

export default class FooterView{
    constructor() {
        this.elementCreator = this.createView();
    }

    getHTMLElement() {
        return this.elementCreator.getElement();
    }

    createView() {
        const params ={
            tag: 'footer',
            classNames: [CssClasses.FOOTER],
            textContent: TEXT,
            callback: null,
        };
        const elementCreator = new ElementCreator(params);

        return elementCreator;
    }
}