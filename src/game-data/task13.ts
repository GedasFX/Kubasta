//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import washingtonpost from 'assets/tasks/10/Websites-Washington post.png';

const task13data: TaskData = {
    title: 'Washington Post',
    description:'You have to determine whether a website is secure or not.',
    instructions:'',
    setting: 'You have to determine whether a website is secure or not.',
    screens: {
        washingtonpost: {
            component: fromUrl(washingtonpost),
            buttons: [

            ]
        }
    },
    buttons: [
        {
            text: 'Secure',
            onClick: ({ dispatch, state }) => {
                dispatch(gameActions.openFeedbackDialog({
                    text: "Be careful! This site has a weird domain that does not match the real www.washingtonpost.com",
                    next: {screenId: 'seb', taskId: 14}
                }));
                dispatch(gameActions.updatePoints({ points: -5 }));
            },
        },
        {
            text: 'Not secure',
            onClick: ({ dispatch, state }) => {
                dispatch(gameActions.openFeedbackDialog({
                    text:"Nice! You recognized that there is something wrong with the domain.",
                    next: {screenId: 'seb', taskId: 14}
                }));
                dispatch(gameActions.updatePoints({ points: 5 }));
            },
        }
    ]
}

export default task13data;