export type ElementsParams = {
    tag: string,
    classNames: Array<string>,
    textContent: string,
}

export type ViewParams = {
    tag: string,
    classNames: Array<string>,
    textContent: string,
}

export interface ICreator{
    element: HTMLElement | null,
    getElement(): HTMLElement | null,
    addInnerElement(element: HTMLElement): void,
    createElement(param: ElementsParams): void,
}