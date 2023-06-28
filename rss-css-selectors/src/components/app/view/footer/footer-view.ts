import './footer.css';
import ElementCreator from '../../../utility/element-creator';
// import View from '../view';
import { ElementsParams } from '../../../../types/index';

const CssClasses = {
    FOOTER: 'footer',
}
const TEXT = 'Made by @iozefavichus';

export default class FooterView{
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
            tag: 'footer',
            classNames: [CssClasses.FOOTER],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);

        return elementCreator;
    }
}