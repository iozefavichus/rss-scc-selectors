import { ElemenetsParams } from 'types/index';


export default class ElementCreator {
    constructor(param) {
        this.element = null;
        this.createElement(param);
    }

    createElement(param){
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
    setCallback(callback){
        this.element.addEventListener('click', (event) => callback(event))
    }
}