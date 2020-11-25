import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import blackmail from 'assets/tasks/7/Email- Blackmail.png';

const task7data: TaskData = {
  title: 'Blackmail',
  setting:
    'Someone you don’t know appears to be blackmailing you. What should you do?',
  instructions: 'Decide on your course of action.',
  description: 'Investigate them and decide on your course of action.',
  screens: {
    blackmail: {
      component: fromUrl(blackmail),
      buttons: [
        {
          position: { left: '0%', top: '88.88%' },
          size: { width: '100%', height: '11.11%' },
          onClick: ({ dispatch, state }) => {
            dispatch(gameActions.gameOver());
            dispatch(gameActions.updatePoints({ points: -state.points }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Game over!',
                text:
                  'Never ever get tricked by malicious ads. That’s how you actually infect your computer.',
                next: {
                  taskId: '0',
                  screenId: 'gameover',
                },
              })
            );
          },
        },
      ],
    },
  },
  buttons: [
    {
      text: 'Send money',
      onClick: ({ dispatch }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Uh oh!',
            text:
              'Don’t let yourself be tricked! These kinds of scams are very common, and this person is bluffing.',
            next: {
              taskId: 8,
              screenId: 'moneytransfer',
            },
          })
        );
        dispatch(gameActions.updatePoints({ points: -10 }));
      },
    },
    {
      text: 'Reply',
      onClick: ({ dispatch }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Oh no!',
            text:
              'Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself.',
            next: {
              taskId: 8,
              screenId: 'moneytransfer',
            },
          })
        );
        dispatch(gameActions.updatePoints({ points: -5 }));
      },
    },
    {
      text: 'Ignore',
      onClick: ({ dispatch }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Good!',
            text: 'Ignoring suspicious emails is one way to do it.',
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
      text: 'Report spam',
      onClick: ({ dispatch }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Smart choice!',
            text:
              'Reporting spam helps your email’s algorithms to recognize suspicious emails as spam.',
            next: {
              taskId: 8,
              screenId: 'moneytransfer',
            },
          })
        );
        dispatch(gameActions.updatePoints({ points: 10 }));
      },
    },
  ],
};

export default task7data;
