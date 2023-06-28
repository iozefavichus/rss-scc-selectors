import './game.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const TEXT = '';
const CssClasses = {
    GAME: 'game-wrapper',
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

        return elementCreator;
    }
}