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
        if (this.headX === value) return;
        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!');
        }

        // 如果发生了调头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.headX) {
                value = this.headX - 10;
            } else {
                value = this.headX + 10;
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';

        this.checkHeadPos();
    }

    set headY(value: number) {
        if (this.headY === value) return;
        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!');
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.headY) {
                value = this.headY - 10;
            } else {
                value = this.headY + 10;
            }
        }

        this.moveBody();
        this.head.style.top = value + 'px';

        this.checkHeadPos();
    }

    addBody() {
        this.snakeEle.insertAdjacentElement('beforeend', document.createElement('div'));
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            const aheadX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            const aheadY = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = aheadX + 'px';
            (this.bodies[i] as HTMLElement).style.top = aheadY + 'px';
        }
    }

    checkHeadPos() {
        for (let i = 1; i < this.bodies.length; i++) {
            const bd = this.bodies[i] as HTMLElement;
            if (this.headX === bd.offsetLeft && this.headY === bd.offsetTop) {
                throw new Error('GAME OVER!请刷新页面重新开始！');
            }
        }
    }
}

export default Snake;
