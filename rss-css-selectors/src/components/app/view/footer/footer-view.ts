import './footer.css';
import ElementCreator from '../../../utility/element-creator';
import { ElementsParams } from '../../../../types/index';

const CssClasses = {
    FOOTER: 'footer',
    GITHUB: 'github',
    RSSCHOOL: 'rsschool',
    LINK: 'link'
}
const TEXT = 'Made by @iozefavichus';
const TEXTGITHUB = 'Github';

export default class FooterView{
    elementCreator: ElementCreator;

    constructor() {
        this.elementCreator = this.createView();
    }

    getHtmlElement(): HTMLElement {
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
        const linkparams: ElementsParams ={
            tag: 'a',
            classNames: [CssClasses.LINK],
            textContent: ''
        };

        const elementCreator = new ElementCreator(params);

        const github = new ElementCreator(githubparams);
        elementCreator.addInnerElement(github.getElement());
        const res: HTMLElement = github.getElement();
        res.setAttribute("href", "https://github.com/iozefavichus");

        const link  = new ElementCreator(linkparams);
        elementCreator.addInnerElement(link.getElement());
        const linkatr: HTMLElement = link.getElement();
        linkatr.setAttribute("href", "https://rs.school/");

        const rss = new ElementCreator(rssparams);
        link.addInnerElement(rss.getElement());

        const rsschool: HTMLElement = rss.getElement();

        rsschool.setAttribute("src", "../../../../images/rs_school_js.svg");

        return elementCreator;
    }
}