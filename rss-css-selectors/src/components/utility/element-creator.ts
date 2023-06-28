import { ElementsParams } from '../../../src/types/index';


export default class ElementCreator{
    element: HTMLElement | null

    constructor(param: ElementsParams){
        this.element = null;
        this.createElement(param);
    }

    getElement(): HTMLElement | null{
        return this.element;
    }

    addInnerElement(element: ElementCreator | HTMLElement) {
        if (element instanceof ElementCreator) {
            // this.element?.append(element.getElement());
        } else {
            this.element?.append(element);
        }
    }

    createElement(param: ElementsParams){
        this.element = document.createElement(param.tag);
        this.setCssClasses(param.classNames);
        this.setTextcontent(param.textContent);
        // this.setCallback(param.callback);
    }

    setCssClasses(cssClasses: string[]){
            cssClasses.forEach((className) => this.element?.classList.add(className));
    }
    setTextcontent(text: string | null){
        if(this.element){
            this.element.textContent = text;
        }
    }
    // setCallback(callback: () => void){
    //     if(this.element){
    //         this.element.addEventListener('click', (event) => callback(event))
    //     }
    // }
}