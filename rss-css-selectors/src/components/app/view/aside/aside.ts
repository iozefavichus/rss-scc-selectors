import View from '../view';

const CssClasses = {
    ASIDE: 'aside',
};

export default class AsideViewView extends View {
    constructor() {
        const params = {
            tag: 'main',
            classNames: [CssClasses.ASIDE],
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

