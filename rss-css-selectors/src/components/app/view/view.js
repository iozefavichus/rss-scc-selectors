// import ElementCreator from '../../utility/element-creator';
// import { ViewParams } from '../../../types/index';

// export default class View {
//     viewElementCreator: ViewParams;

//     constructor(params = { tag: 'section', classNames: [] }) {
//         this.viewElementCreator = this.createView(params);
//     }

//     getHtmlElement() {
//         return this.viewElementCreator.getElement();
//     }

//     createView(params: ViewParams) {
//         const elementParams = {
//             tag: params.tag,
//             classNames: params.classNames,
//             textContent: '',
//             callback: null,
//         };
//         this.viewElementCreator = new ElementCreator(elementParams);

//         return this.viewElementCreator;
//     }
// }