import './game.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const TEXT = '';
const CssClasses = {
    GAME: 'game-wrapper',
    WRAPPER: 'table-wrapper',
    SURFACE: 'table-surface',
    LEG: 'table-leg',
    EDGE: 'table-edge',
    NAME: 'nametags',
    TABLE: 'table'
};

export default class Game {
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
            classNames: [CssClasses.GAME],
            textContent: TEXT
        };

        const elementCreator = new ElementCreator(params);
        const table = new Table();
        const edge = new Edge();
        elementCreator.addInnerElement(table.getHtmlElement());
        elementCreator.addInnerElement(edge.getHtmlElement());
        return elementCreator;
    }
}

class Table {
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
            classNames: [CssClasses.WRAPPER],
            textContent: TEXT
        };
        const surfaceparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.SURFACE],
            textContent: TEXT
        };
        const nameparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.NAME],
            textContent: TEXT
        };
        const tableparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.TABLE],
            textContent: TEXT
        };

        const elementCreator = new ElementCreator(params);

        const surface = new ElementCreator(surfaceparams);
        elementCreator.addInnerElement(surface.getElement());
        const name = new ElementCreator(nameparams);
        elementCreator.addInnerElement(name.getElement());
        const table = new ElementCreator(tableparams);
        elementCreator.addInnerElement(table.getElement());

        return elementCreator;
    }
}

class Edge {
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
            classNames: [CssClasses.EDGE],
            textContent: TEXT
        };
        const legparams: ElementsParams ={
            tag: 'div',
            classNames: [CssClasses.LEG],
            textContent: TEXT
        };
        const elementCreator = new ElementCreator(params);

        const leg = new ElementCreator(legparams);
        const secondleg = new ElementCreator(legparams);
        elementCreator.addInnerElement(leg.getElement());
        elementCreator.addInnerElement(secondleg.getElement());


        return elementCreator;
    }
}