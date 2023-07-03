import { ElementsParams } from '../../../src/types/index';


export default class ElementCreator{
    element: HTMLElement | null

    constructor(param: ElementsParams){
        this.element = null;
        this.createElement(param);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getElement(): any {
        return this.element;
    }

    addInnerElement(element: HTMLElement) {
        if (element instanceof ElementCreator) {
            // this.element?.append(element.getElement());
        } else {
            this.element?.append(element);
        }
    }
    addInnerHTML(text: string){
        if(this.element){
            this.element.innerHTML = text;
        }
    }

    createElement(param: ElementsParams){
        this.element = document.createElement(param.tag);
        this.setCssClasses(param.classNames);
        this.setTextcontent(param.textContent);
    }

    setCssClasses(cssClasses: string[]){
            cssClasses.forEach((className) => this.element?.classList.add(className));
    }
    setTextcontent(text: string | null){
        if(this.element){
            this.element.textContent = text;
        }
    }
}