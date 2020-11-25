import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import moneytransfer from 'assets/tasks/8/Email- Money transfer.png';

const task8data: TaskData = {
    title: 'Money transfer',
    setting:
        'It is time to read your emails. In your mailbox, there are several emails.',
    instructions:
        'Investigate them and decide on your course of action.',
    description: 'Investigate them and decide on your course of action.',
    screens: {
        moneytransfer: {
            component: fromUrl(moneytransfer),
            buttons:[
                //reply button
                {
                    position:{left:"75.78125%", top:"9.5333333%"},
                    size: {width:"6.71875%", height:"4.5833333%"},
                    onClick: ({dispatch}) => {
                        gameActions.openFeedbackDialog({
                            text:
                                'Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself.',
                            next: {
                                taskId: 9,
                                screenId: 'netflixpassword',
                            },
                    });
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
                  taskId: 9,
                  screenId: 'netflixpassword',
                },
              })
            );
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
                  taskId: 9,
                  screenId: 'netflixpassword',
                },
              })
            );
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

export default task8data;
