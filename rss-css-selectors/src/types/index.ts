export type ElementsParams = {
    tag: string,
    classNames: Array<string>,
    textContent: string,
    callback(): void,
}

export type ViewParams = {
    tag: string,
    classNames: Array<string>,
    textContent: string,
    callback(): void,
}

export interface Creator{
    element: HTMLElement | null,
    getElement(): HTMLElement | null,
    addInnerElement(element: HTMLElement): void,
    createElement(param: ElementsParams): void,
    // setCssClasses(),
    // setTextcontent(),
    // setCallback(),
}