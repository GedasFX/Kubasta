//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import amazon from 'assets/tasks/10/Websites-Amazon2.png';

const task12data: TaskData = {
    title: 'Amazon',
    description:'You have to determine whether a website is secure or not.',
    instructions:'',
    setting: 'You have to determine whether a website is secure or not.',
    screens: {
        amazon: {
            component: fromUrl(amazon),
            buttons: [

            ]
        }
    },
    buttons: [
        {
            text: 'Secure',
            onClick: ({ dispatch, state }) => {
                dispatch(gameActions.openFeedbackDialog({
                    text: "Correct! There is nothing wrong with this site!",
                    next: {screenId: 'washingtonpost', taskId: 13}
                }));
                dispatch(gameActions.updatePoints({ points: 5 }));
            },
        },
        {
            text: 'Not secure',
            onClick: ({ dispatch, state }) => {
                dispatch(gameActions.openFeedbackDialog({
                    text:"Wrong! There is nothing wrong with this site!",
                    next: {screenId: 'washingtonpost', taskId: 13}
                }));
                dispatch(gameActions.updatePoints({ points: -5 }));
            },
        }
    ]
}

export default task12data;