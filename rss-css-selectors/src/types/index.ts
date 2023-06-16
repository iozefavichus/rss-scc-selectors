export type ElementsParams = {
    tag: string,
    classNames: Array<string>,
    textContent: string,
    callback(): void,
}

export type ViewParams = {
    tag: string,
    classNames: Array<string>
}

export interface Creator{
    element: HTMLElement | null,
    // getElement(): HTMLElement | null,
    // addInnerElement(),
    // createElement(),
    // setCssClasses(),
    // setTextcontent(),
    // setCallback(),
}