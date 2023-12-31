import './header.css';
// import View from '../view';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const CssClasses = {
    HEADER: 'header',
    SPAN: 'share-menu'
}
const TEXT = 'CSS diner';

export default class HeaderView{
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
                tag: 'header',
                classNames: [CssClasses.HEADER],
                textContent: TEXT
            };
            const spanparams: ElementsParams ={
                tag: 'span',
                classNames: [CssClasses.SPAN],
                textContent: 'Share'
            };
            const elementCreator = new ElementCreator(params);
            const span = new ElementCreator(spanparams);
            elementCreator.addInnerElement(span.getElement());

            return elementCreator;
        }
}