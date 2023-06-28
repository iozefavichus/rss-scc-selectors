// import ElementCreator from '../../utility/element-creator';
// import { ViewParams } from '../../../types/index';

// export default class View {
//     viewElementCreator: ViewParams;

//     constructor(params:  ViewParams = { tag: 'section', classNames: [], textContent: ''}) {
//         this.viewElementCreator = this.createView(params);
//     }

//     // getHtmlElement(): () => HTMLElement {
//     //     return this.viewElementCreator.getElement();
//     // }

//     createView(params: ViewParams) {
//         const elementParams: ViewParams = {
//             tag: params.tag,
//             classNames: params.classNames,
//             textContent: ''
//         };
//         // this.viewElementCreator = new ElementCreator(elementParams);

//         return this.viewElementCreator;
//     }
// }