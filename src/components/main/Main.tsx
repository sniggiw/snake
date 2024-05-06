import { useEffect } from 'react';
import classes from './main.module.less';

import classFood from '../../class/Food.ts';

export default function Main() {
    const { Food } = classFood();
    useEffect(() => {
        const food = new Food();
        food.changeFoodPos();
    }, []);

    return (
        <div className={classes.main}>
            <div id="stage" className={classes.stage}>
                <div id="snake" className={classes.snake}>
                    <div></div>
                </div>
                <div id="food" className={classes.food}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="score-panel" className={classes['score-panel']}>
                <div>
                    SCORE:
                    <span id="score">0</span>
                </div>
                <div>
                    LEVEL:
                    <span id="level">1</span>
                </div>
            </div>
        </div>
    );
}
