import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import blackmail from 'assets/tasks/7/Email- Blackmail.png';

const task7data: TaskData = {
    title: 'Blackmail',
    setting:
        'It is time to read your emails. In your mailbox, there are several emails.',
    instructions:
        'Investigate them and decide on your course of action.',
    description: 'Investigate them and decide on your course of action.',
    screens: {
        blackmail: {
            component: fromUrl(blackmail),
            buttons:[
                //reply button
                {
                    position:{left:"75.78125%", top:"9.5333333%"},
                    size: {width:"6.71875%", height:"4.5833333%"},
                    onClick: (dispatch) => {
                        dispatch(gameActions.setFeedbackDialogText({text:"Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself."}));
                        dispatch(gameActions.updatePoints({points:-5}));
                        dispatch(gameActions.setNextTaskAndScreen({nextScreenId:'moneytransfer', nextTaskId:8}));
                        dispatch(gameActions.toggleFeedbackDialog());
                    }
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: -5 }));
          },
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
                  taskId: 8,
                  screenId: 'moneytransfer',
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
                  taskId: 8,
                  screenId: 'moneytransfer',
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: 5 }));
          },
        },
        {
          position: { left: '0%', top: '88.88%' },
          size: { width: '100%', height: '11.11%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'Game over! Don’t get tricked by malicious ads. That’s how you actually infect your computer.',
                next: {
                  taskId: 1,
                  screenId: 'desktopnetworknotconnected',
                },
              })
            );
          },
        },
      ],
    },
  },
};

export default task7data;
