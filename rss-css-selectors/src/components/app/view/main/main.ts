// import View from '../../view/view';
// import { ViewParams } from '../../../../types/index';
import './main.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';
import FooterView from '../footer/footer-view';
import HeaderView from '../header/header-view';

const CssClasses = {
    MAIN: 'main',
};
const TEXT = '';

export default class MainView{
    elementCreator: ElementCreator;

    constructor() {
        this.elementCreator = this.createView();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getHtmlElement(): any {
        return this.elementCreator.getElement();
    }

    createView() {
        const header = new HeaderView();
        const footer = new FooterView();
        const params: ElementsParams ={
            tag: 'main',
            classNames: [CssClasses.MAIN],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);
        elementCreator.addInnerElement(header.getHtmlElement());
        elementCreator.addInnerElement(footer.getHtmlElement());
        return elementCreator;
    }

}

