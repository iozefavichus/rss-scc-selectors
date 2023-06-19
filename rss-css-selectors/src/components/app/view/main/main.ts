import View from '../view';

const CssClasses = {
    MAIN: 'main',
};

export default class MainView extends View {
    constructor() {
        const params = {
            tag: 'main',
            classNames: [CssClasses.MAIN],
        };
        super(params);
    }


    setContent(content) {
        const htmlElement = this.viewElementCreator.getElement();
        while (htmlElement.firstElementChild) {
            htmlElement.firstElementChild.remove();
        }
        this.viewElementCreator.addInnerElement(content.getHtmlElement());
    }
}

