// import View from '../../view/view';
// import { ViewParams } from '../../../../types/index';
import './main.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';
import FooterView from '../footer/footer-view';
import HeaderView from '../header/header-view';
import Order from '../main/order';
import Note from '../main/note';
import Game from '../main/game';
import Editor from './editor';

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
        const order = new Order();
        const note = new Note();
        const footer = new FooterView();
        const game = new Game();
        const editor = new Editor();
        const params: ElementsParams ={
            tag: 'main',
            classNames: [CssClasses.MAIN],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);

        elementCreator.addInnerElement(header.getHtmlElement());
        elementCreator.addInnerElement(order.getHtmlElement());
        elementCreator.addInnerElement(note.getHtmlElement());
        const help: HTMLElement = note.getHtmlElement();
        help.setAttribute("href", "#");
        elementCreator.addInnerElement(game.getHtmlElement());
        elementCreator.addInnerElement(editor.getHtmlElement());
        elementCreator.addInnerElement(footer.getHtmlElement());

        return elementCreator;
    }

}

