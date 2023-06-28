import './style.css';
import AsideView from './view/aside/aside';
// import FooterView from './view/footer/footer-view';
// import HeaderView from './view/header/header-view';
import MainView from './view/main/main';

export default class App {
    constructor() {
        this.createView();
    }

    createView() {

        const main = new MainView();
        const aside = new AsideView();

        document.body.append(main.getHtmlElement());
        document.body.append(aside.getHtmlElement());
        // document.body.append(header.getHtmlElement());
        // document.body.append(footer.getHtmlElement());
    }
}