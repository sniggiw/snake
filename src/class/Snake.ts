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
        if (this.headX === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!');
        }
        this.head.style.left = value + 'px';
    }

    set headY(value: number) {
        if (this.headY === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!');
        }
        this.head.style.top = value + 'px';
    }

    addBody() {
        this.snakeEle.insertAdjacentElement('beforeend', document.createElement('div'));
    }
}

export default Snake;
