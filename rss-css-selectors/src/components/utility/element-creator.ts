import { ElementsParams } from '../../../src/types/index';


export default class ElementCreator {
    constructor(param: ElementsParams) {
        this.element = null;
        this.createElement(param);
    }

    getElement() {
        return this.element;
    }
    addInnerElement(element) {
        if (element instanceof ElementCreator) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }

    createElement(param: ElementsParams){
        this.element = document.createElement(param.tag);
        this.setCssClasses(param.classNames);
        this.setTextcontent(param.textContent);
        this.setCallback(param.callback);
    }

    setCssClasses(cssClasses: Array<string>){
        cssClasses.forEach((className) => this.element.classList.add(className));
    }
    setTextcontent(text: string){
        this.createElement.textContent = text;
    }
    setCallback(callback: () => void){
        this.element.addEventListener('click', (event) => callback(event))
    }
}