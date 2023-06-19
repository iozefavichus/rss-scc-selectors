import './footer.css';
import View from '../view';

const CssClasses = {
    FOOTER: 'footer',
}
const TEXT = 'Made by @iozefavichus';

export default class FooterView extends View {
    constructor() {
        const params = {
            tag: 'section',
            classNames: [CssClasses.FOOTER],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        this.viewElementCreator.setTextContent(TEXT);
    }
}