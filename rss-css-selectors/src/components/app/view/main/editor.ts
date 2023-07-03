import './editor.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const TEXT = '';
const TEXTCSS = 'style.css';
const TEXTHTML = 'table.html';
const TEXTENTER = 'enter';
const CssClasses = {
    EDITOR: 'editor',
    PANE: 'editor-pane',
    CSS: 'css-view',
    HTML: 'html-view',
    INPUT: 'input-header',
    FILE: 'file-name',
    WINDOW: 'file-window',
    NUMBERS: 'line-numbers',
    MARKUP: 'markup',
    STROBE: 'input-strobe',
    ENTER: 'enter-button',
};

export default class Editor {
    elementCreator: ElementCreator;

    constructor() {
        this.elementCreator = this.createView();
    }

    getHtmlElement(): HTMLElement {
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

class EditorPane {
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
            classNames: [CssClasses.PANE],
            textContent: TEXT
        };
        const inputparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.INPUT],
            textContent: 'CSS Editor',
        };
        const fileparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.FILE],
            textContent: TEXTCSS
        };
        const windowparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.CSS, CssClasses.WINDOW],
            textContent: TEXT
        };
        const strobeparams: ElementsParams ={
            tag: 'input',
            classNames: [CssClasses.STROBE],
            textContent: TEXT
        };
        const enterparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.ENTER],
            textContent: TEXTENTER
        };

        const elementCreator = new ElementCreator(params);

        const input = new ElementCreator(inputparams);
        elementCreator.addInnerElement(input.getElement());
        const file = new ElementCreator(fileparams);
        input.addInnerElement(file.getElement());
        const window = new ElementCreator(windowparams);
        elementCreator.addInnerElement(window.getElement());
        const numbers = new Numbers();
        window.addInnerElement(numbers.getHtmlElement());
        const strobe = new ElementCreator(strobeparams);
        window.addInnerElement(strobe.getElement());
        const enter = new ElementCreator(enterparams);
        window.addInnerElement(enter.getElement());

        return elementCreator;
    }
}

class EditorHtml {
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
            classNames: [CssClasses.PANE, CssClasses.HTML],
            textContent: TEXT
        };
        const inputparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.INPUT],
            textContent: 'HTML Viewer',
        };
        const fileparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.FILE],
            textContent: TEXTHTML
        };
        const windowparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.HTML, CssClasses.WINDOW],
            textContent: TEXT
        };
        const markupparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.MARKUP],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);

        const input = new ElementCreator(inputparams);
        elementCreator.addInnerElement(input.getElement());
        const file = new ElementCreator(fileparams);
        input.addInnerElement(file.getElement());
        const window = new ElementCreator(windowparams);
        elementCreator.addInnerElement(window.getElement());
        const numbers = new Numbers();
        window.addInnerElement(numbers.getHtmlElement());
        const markup = new ElementCreator(markupparams);
        window.addInnerElement(markup.getElement());

        return elementCreator;
    }
}

class Numbers {
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
            classNames: [CssClasses.NUMBERS],
            textContent: TEXT
        };

        const elementCreator = new ElementCreator(params);
        elementCreator.addInnerHTML('1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20');
        return elementCreator;
    }

}
