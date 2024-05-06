class Snake {
    snakeEle: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.snakeEle = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div')!;
        this.bodies = this.snakeEle.getElementsByTagName('div');
    }

    get headX() {
        return this.head.offsetLeft;
    }

    get headY() {
        return this.head.offsetTop;
    }

    set headX(value: number) {
        this.head.style.left = value + 'px';
    }

    set headY(value: number) {
        this.head.style.top = value + 'px';
    }

    addBody() {
        this.snakeEle.insertAdjacentElement('beforeend', document.createElement('div'));
    }
}

export default Snake;
