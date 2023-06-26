// import '../style.css';
// import AsideView from './view/aside/aside';
import FooterView from './view/footer/footer-view';
// import MainView from './view/main/main';

export default class App {
    constructor() {
        this.createView();
    }

    createView() {
        // const main = new MainView();
        // const aside = new AsideView();
        const footer = new FooterView();

        document.body.append(footer.getHtmlElement());
    }
}