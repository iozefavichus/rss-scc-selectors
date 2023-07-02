export function closeMenu() {
    console.log('Close');
    document.querySelector('.aside')?.classList.remove('menu-open');
}

export function openMenu() {
    console.log('Open');
    document.querySelector('.aside')?.classList.add('menu-open');
}