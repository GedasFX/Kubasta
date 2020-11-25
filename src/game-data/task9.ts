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
    buttons: [
        {
            text: 'Call',
            onClick:({dispatch}) => {
                dispatch(
                    gameActions.openFeedbackDialog({
                        text:
                            'Smart! If you ever need to share password, it is good to use a phone call, so your password doesn’t get written down and roam the depths of internet.',
                        next: {
                            taskId: 10,
                            screenId: 'facebook',
                        },
                    })
                );
                dispatch(gameActions.updatePoints({ points: 5 }));
            }
        },
        {
            text: 'Send via Whatsapp',
            onClick: ({dispatch}) => {
                dispatch(
                    gameActions.openFeedbackDialog({
                        text:
                            'Good! Choosing another communication channel is a good way of avoiding unwanted password theft. However, not writing your password would be a better choice',
                        next: {
                            taskId: 10,
                            screenId: 'facebook',
                        },
                    })
                );
                dispatch(gameActions.updatePoints({ points: 5 }));
            }
        },
        {
            text: 'Send via email',
            onClick: ({dispatch}) => {
                dispatch(
                    gameActions.openFeedbackDialog({
                        text:
                            'Even though this is a genuine email, you should never send your password to anyone in plaintext as they might get stolen.',
                        next: {
                            taskId: 10,
                            screenId: 'facebook',
                        },
                    })
                );
                dispatch(gameActions.updatePoints({ points: -5 }));
            }
        },
        {
            text: 'Ignore',
            onClick: ({dispatch}) => {
                dispatch(
                    gameActions.openFeedbackDialog({
                        text: 'It is not nice to ignore your friend’s emails like that! Better contact her via different communication channel.',
                        next: {
                            taskId: 10,
                            screenId: 'facebook',
                        },
                    })
                );
                dispatch(gameActions.updatePoints({ points: 0 }));
            }
        },
        {
            text: 'Report spam',
            onClick: ({dispatch}) => {
                dispatch(
                    gameActions.openFeedbackDialog({
                        text:
                            'Reporting genuine emails as spam messes up your email spam filtering algorithms, and you may miss some important future emails.',
                        next: {
                            taskId: 10,
                            screenId: 'facebook',
                        },
                    })
                );
                dispatch(gameActions.updatePoints({ points: -10 }));
            }
        }
    ]
};

export default task9data;
