import './footer.css';
import ElementCreator from '../../../utility/element-creator';
// import View from '../view';
import { ElementsParams } from '../../../../types/index';

const CssClasses = {
    FOOTER: 'footer',
    GITHUB: 'github',
    RSSCHOOL: 'rsschool'
}
const TEXT = 'Made by @iozefavichus';
const TEXTGITHUB = 'Github';

export default class FooterView{
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
            tag: 'footer',
            classNames: [CssClasses.FOOTER],
            textContent: TEXT
        };
        const githubparams: ElementsParams ={
            tag: 'a',
            classNames: [CssClasses.GITHUB],
            textContent: TEXTGITHUB
        };
        const rssparams: ElementsParams ={
            tag: 'img',
            classNames: [CssClasses.RSSCHOOL],
            textContent: ''
        };

        const elementCreator = new ElementCreator(params);

        const github = new ElementCreator(githubparams);
        elementCreator.addInnerElement(github.getElement());
        const res: HTMLElement = github.getElement();
        res.setAttribute("href", "https://github.com/iozefavichus");

        const rss = new ElementCreator(rssparams);
        elementCreator.addInnerElement(rss.getElement());

        const rsschool: HTMLElement = rss.getElement();
        rsschool.setAttribute("href", "https://rs.school/");
        rsschool.setAttribute("src", "../../../../images/rs_school_js.svg");

        return elementCreator;
    }
}