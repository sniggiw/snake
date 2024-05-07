import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;

    direction: string = 'Right';

    isLive: boolean = true;

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 5);
        this.snake = new Snake();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowUp':
            case 'Up':
                this.direction = 'Up';
                break;
            case 'ArrowDown':
            case 'Down':
                this.direction = 'Down';
                break;
            case 'ArrowLeft':
            case 'Left':
                this.direction = 'Left';
                break;
            case 'ArrowRight':
            case 'Right':
                this.direction = 'Right';
                break;
        }
    }

    run() {
        let currentX = this.snake.headX;
        let currentY = this.snake.headY;

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                currentY -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                currentY += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                currentX -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                currentX += 10;
                break;
        }

        this.checkEat(currentX, currentY);

        try {
            this.snake.headX = currentX;
            this.snake.headY = currentY;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            alert(e.message + '请刷新页面重新开始！');
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this), 100 - (this.scorePanel.level - 1) * 10);
    }

    checkEat(x: number, y: number) {
        if (x === this.food.foodX && y === this.food.foodY) {
            this.food.changeFoodPos();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}
export default GameControl;
