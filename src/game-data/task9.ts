import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import netflixpassword from 'assets/tasks/9/Email- Netflix password.png';

const task9data: TaskData = {
    title: 'Netflix password',
    setting:
        'It is time to read your emails. In your mailbox, there are several emails.',
    instructions:
        'Investigate them and decide on your course of action.',
    description: 'Investigate them and decide on your course of action.',
    screens: {
        netflixpassword: {
            component: fromUrl(netflixpassword),
            buttons:[
                //reply button
                {
                    position:{left:"75.78125%", top:"9.5333333%"},
                    size: {width:"6.71875%", height:"4.5833333%"},
                    onClick: ({dispatch}) => {
                        dispatch(gameActions.updatePoints({ points: -5 }));
                        dispatch(
                            gameActions.openFeedbackDialog({
                                text:
                                    'Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself.',
                            })
                        );
                    }
                },
        //report spam button
        {
          position: { left: '83.59375%', top: '9.5333333%' },
          size: { width: '6.71875%', height: '4.5833333%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'Smart! Reporting spam helps your email’s algorithms to recognize suspicious emails as spam.',
                next: {
                  taskId: 10,
                  screenId: 'facebook',
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: 10 }));
          },
        },
        //close button
        {
          position: { left: '91.40625%', top: '9.5333333%' },
          size: { width: '6.71875%', height: '4.5833333%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text: 'Good! Ignoring suspicious emails is one way to do it.',
                next: {
                  taskId: 10,
                  screenId: 'facebook',
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: 5 }));
          },
        },
      ],
    },
  },
};

export default task9data;
