// import View from '../view';
import './aside.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const CssClasses = {
    ASIDE: 'aside',
    HELP: 'help-wrapper',
    LEVEL: 'level-header',
    LEVELTEXT: 'level-text',
    CHECK: 'checkmark',
    LEVELNAV: 'levelnav',
    PREV: 'prev',
    NEXT: 'next',
    PROGRESS:'level-progress',
    PROG: 'progress',
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
        const help = new Help();

        elementCreator.addInnerElement(help.getHtmlElement());

        return elementCreator;
    }
}

class Help {
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
            classNames: [CssClasses.HELP],
            textContent: TEXT
        };
        const headerparams: ElementsParams ={
            tag: 'h1',
            classNames: [CssClasses.LEVEL],
            textContent: TEXT
        };
        const levelparams: ElementsParams ={
            tag: 'span',
            classNames: [CssClasses.LEVELTEXT],
            textContent: TEXT
        };
        const checkparams: ElementsParams ={
            tag: 'span',
            classNames: [CssClasses.CHECK],
            textContent: TEXT
        };
        const levelnavparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.LEVELNAV],
            textContent: TEXT
        };
        const prevparams: ElementsParams ={
            tag: 'a',
            classNames: [CssClasses.PREV],
            textContent: TEXT
        };
        const nextparams: ElementsParams ={
            tag: 'a',
            classNames: [CssClasses.NEXT],
            textContent: TEXT
        };
        const progressparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.PROGRESS],
            textContent: TEXT
        };
        const progparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.PROG],
            textContent: TEXT
        };


        const elementCreator = new ElementCreator(params);

        const header = new ElementCreator(headerparams);
        elementCreator.addInnerElement(header.getElement());
        const leveltext = new ElementCreator(levelparams);
        header.addInnerElement(leveltext.getElement());
        const check = new ElementCreator(checkparams);
        header.addInnerElement(check.getElement());

        const levelnav = new ElementCreator(levelnavparams);
        elementCreator.addInnerElement(levelnav.getElement());
        const prev = new ElementCreator(prevparams);
        levelnav.addInnerElement(prev.getElement());
        const previous: HTMLElement = prev.getElement();
        previous.setAttribute("href", "#");
        const next = new ElementCreator(nextparams);
        levelnav.addInnerElement(next.getElement());
        const nexty: HTMLElement = next.getElement();
        nexty.setAttribute("href", "#");

        const progress = new ElementCreator(progressparams);
        elementCreator.addInnerElement(progress.getElement());
        const prog = new ElementCreator(progparams);
        progress.addInnerElement(prog.getElement());

        return elementCreator;
    }
}

