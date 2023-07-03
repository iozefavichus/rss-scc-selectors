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
    LEVELNAV: 'level-nav',
    PREV: 'previous',
    NEXT: 'next',
    PROGRESS:'level-progress',
    PROG: 'progress',
    DISPLAY: 'display-help',
    SELNAME: 'selector-name',
    TITLE: 'title',
    SYNTAX: 'syntax',
    HINT: 'hint',
    EXAMTITLES: 'examples-title',
    EXAM: 'examples',
    LEVELMENU: 'level-menu',
    LEVELS: 'levels',
    RESET:'reset-progress',
    MENUTOGGLEWRAP: 'level-menu-toggle-wrapper',
    MENUTOGGLE: 'level-menu-toggle',

};
const TEXT = '';
const TEXTCHOOSE = 'Choose a level';
const TEXTRESET = 'Reset Progress';

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
        const displayparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.DISPLAY],
            textContent: TEXT
        };
        const headparams: ElementsParams ={
            tag: 'h3',
            classNames: [CssClasses.SELNAME],
            textContent: TEXT
        };
        const head2params: ElementsParams ={
            tag: 'h2',
            classNames: [CssClasses.TITLE],
            textContent: TEXT
        };
        const head3params: ElementsParams ={
            tag: 'h3',
            classNames: [CssClasses.SYNTAX],
            textContent: TEXT
        };
        const hintparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.HINT],
            textContent: TEXT
        };
        const head4params: ElementsParams ={
            tag: 'h4',
            classNames: [CssClasses.EXAMTITLES],
            textContent: TEXT
        };
        const examparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.EXAM],
            textContent: TEXT
        };
        const levelmenuparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.LEVELMENU],
            textContent: TEXT
        };
        const chooseparams: ElementsParams ={
            tag: 'h2',
            classNames: [],
            textContent: TEXTCHOOSE
        };
        const levelsparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.LEVELS],
            textContent: TEXT
        };
        const resetparams: ElementsParams ={
            tag: 'a',
            classNames: [CssClasses.RESET],
            textContent: TEXTRESET
        };
        const menuparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.MENUTOGGLEWRAP],
            textContent: TEXT
        };
        const menutgparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.MENUTOGGLE],
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

        const display = new ElementCreator(displayparams);
        elementCreator.addInnerElement(display.getElement());
        const header1 = new ElementCreator(headparams);
        display.addInnerElement(header1.getElement());
        const header2 = new ElementCreator(head2params);
        display.addInnerElement(header2.getElement());
        const header3 = new ElementCreator(head3params);
        display.addInnerElement(header3.getElement());
        const hint = new ElementCreator(hintparams);
        display.addInnerElement(hint.getElement());
        const header4 = new ElementCreator(head4params);
        display.addInnerElement(header4.getElement());
        const examples = new ElementCreator(examparams);
        display.addInnerElement(examples.getElement());

        const levelmenu = new ElementCreator(levelmenuparams);
        elementCreator.addInnerElement(levelmenu.getElement());
        const choosetext = new ElementCreator(chooseparams);
        levelmenu.addInnerElement(choosetext.getElement());
        const levels = new ElementCreator(levelsparams);
        levelmenu.addInnerElement(levels.getElement());
        const reset = new ElementCreator(resetparams);
        levelmenu.addInnerElement(reset.getElement());
        const res: HTMLElement = reset.getElement();
        res.setAttribute("href", "#");

        const menutogglewrap = new ElementCreator(menuparams);
        elementCreator.addInnerElement(menutogglewrap.getElement());
        const menutg = new ElementCreator(menutgparams);
        menutogglewrap.addInnerElement(menutg.getElement());

        return elementCreator;
    }
}

