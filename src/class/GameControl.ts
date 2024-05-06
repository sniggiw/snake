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
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(e: KeyboardEvent) {
        this.direction = e.key;
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

        this.snake.headX = currentX;
        this.snake.headY = currentY;

        // this.isLive && setTimeout(this.run.bind(this), 900 - (this.scorePanel.level - 1) * 90);
    }
}
export default GameControl;
