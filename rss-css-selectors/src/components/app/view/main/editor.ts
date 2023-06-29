import './editor.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const TEXT = '';
const TEXTCSS = 'style.css';
const CssClasses = {
    EDITOR: 'editor',
    PANE: 'editor-pane',
    CSS: 'css-view',
    HTML: 'html-view',
    INPUT: 'input-header',
    FILE: 'file-name',
    WINDOW: 'file-window',
};

export default class Editor {
    elementCreator: ElementCreator;

    constructor() {
        this.elementCreator = this.createView();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getHtmlElement(): any {
        return this.elementCreator.getElement();
    }

    createView() {
        const pane = new EditorPane();
        const html = new EditorHtml();
        const params: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.EDITOR],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);
        elementCreator.addInnerElement(pane.getHtmlElement());
        elementCreator.addInnerElement(html.getHtmlElement());

        return elementCreator;
    }
}

export class EditorPane {
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
            tag: 'div',
            classNames: [CssClasses.PANE],
            textContent: TEXT
        };
        const inputparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.INPUT],
            textContent: TEXT
        };
        const fileparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.FILE],
            textContent: TEXTCSS
        };
        const windowparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.CSS, CssClasses.WINDOW],
            textContent: TEXTCSS
        };

        const elementCreator = new ElementCreator(params);

        const input = new ElementCreator(inputparams);
        elementCreator.addInnerElement(input.getElement());
        const file = new ElementCreator(fileparams);
        input.addInnerElement(file.getElement());
        input.setTextcontent('CSS Editor');
        const window = new ElementCreator(windowparams);
        elementCreator.addInnerElement(window.getElement());

        return elementCreator;
    }
}

export class EditorHtml {
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
            tag: 'div',
            classNames: [CssClasses.PANE, CssClasses.HTML],
            textContent: TEXT
        };
        const inputparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.INPUT],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);

        const input = new ElementCreator(inputparams);
        elementCreator.addInnerElement(input.getElement());

        return elementCreator;
    }
}