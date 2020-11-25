import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import washingtonedu from 'assets/tasks/10/Websites-washington.edu2.png';

const task11data: TaskData = {
    title: 'Washington edu',
    description:'You have to determine whether a website is secure or not.',
    instructions:'',
    setting: 'You have to determine whether a website is secure or not.',
    screens: {
        washingtonedu: {
            component: fromUrl(washingtonedu),
            buttons: [

            ]
        }
    },
    buttons: [
        {
            text: 'Secure',
            onClick: ({ dispatch, state }) => {
                dispatch(gameActions.openFeedbackDialog({
                    text: "Be careful! http connections are not secure as no encryption in provided to secure your data. You shouldn’t put personal information in such sites.",
                    next: {screenId: 'amazon', taskId: 12}
                }));
                dispatch(gameActions.updatePoints({ points: -5 }));
            },
        },
        {
            text: 'Not secure',
            onClick: ({ dispatch, state }) => {
                dispatch(gameActions.openFeedbackDialog({
                    text:"Good job! http connections are not secure as no encryption in provided to secure your data. You shouldn’t put personal information in such sites.",
                    next: {screenId: 'amazon', taskId: 12}
                }));
                dispatch(gameActions.updatePoints({ points: 5 }));
            },
        }
    ]
}

export default task11data;