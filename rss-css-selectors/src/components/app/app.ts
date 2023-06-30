import './style.css';
import AsideView from './view/aside/aside';
import MainView from './view/main/main';
import { loadLevel } from '../app/logics';

export default class App {
    constructor() {
        this.createView();
    }

    createView() {

        const main = new MainView();
        const aside = new AsideView();

        document.body.append(main.getHtmlElement());
        document.body.append(aside.getHtmlElement());
        loadLevel();
    }
}

