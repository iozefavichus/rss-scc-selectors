// import { ElementsParams, Creator } from '../../../src/types/index';


export default class ElementCreator{
    constructor(param){
        this.element = null;
        this.createElement(param);
    }

    getElement(){
        return this.element;
    }

    addInnerElement(element) {
        if (element instanceof ElementCreator) {
            this.element?.append(element.getElement());
        } else {
            this.element?.append(element);
        }
    }

    createElement(param){
        this.element = document.createElement(param.tag);
        this.setCssClasses(param.classNames);
        this.setTextcontent(param.textContent);
        this.setCallback(param.callback);
    }

    setCssClasses(cssClasses){
            cssClasses.forEach((className) => this.element?.classList.add(className));
    }
    setTextcontent(text){
        if(this.element){
            this.element.textContent = text;
        }
    }
    setCallback(callback){
        if(this.element){
            this.element.addEventListener('click', (event) => callback(event))
        }
    }
}