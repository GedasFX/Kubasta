//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import nytimes from 'assets/tasks/10/Websites- NY times.png';

const task15data: TaskData = {
    title: 'New York Times',
    description:'You have to determine whether a website is secure or not.',
    instructions:'',
    setting: 'You have to determine whether a website is secure or not.',
    screens: {
        nytimes: {
            component: fromUrl(nytimes),
            buttons: [

            ]
        }
    },
    buttons: [
        {
            text: 'Secure',
            onClick: ({ dispatch, state }) => {
                dispatch(gameActions.openFeedbackDialog({
                    text: "Incorrect! Inspect the logo and URL again. Nor logo, nor URL match the real NY times.",
                    next: {screenId: 'camera1', taskId: 18}
                }));
                dispatch(gameActions.updatePoints({ points: -5 }));
            },
        },
        {
            text: 'Not secure',
            onClick: ({ dispatch, state }) => {
                dispatch(gameActions.openFeedbackDialog({
                    text:"Correct! You the wrong logo and URL!",
                    next: {screenId: 'camera1', taskId: 18}
                }));
                dispatch(gameActions.updatePoints({ points: 5 }));
            },
        }
    ]
}

export default task15data;