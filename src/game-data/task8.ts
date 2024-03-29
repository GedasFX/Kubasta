import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import moneytransfer from 'assets/tasks/8/Email- Money transfer.png';

const task8data: TaskData = {
  title: 'Money transfer',
  setting: 'Again an email from an unknown source. Who is sending them?',
  instructions: 'Chose what are you going to do with this email.',
  screens: {
    moneytransfer: {
      component: fromUrl(moneytransfer),
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
      text: 'Transfer money',
      onClick: ({ dispatch }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Oh no!',
            text:
              'You should always verify via another communication channel this kind of requests because it may not be your boss sending the email.',
            next: {
              taskId: 9,
              screenId: 'netflixpassword',
            },
          })
        );
        dispatch(gameActions.updatePoints({ points: -10 }));
      },
    },
    {
      text: 'Reply to verify',
      onClick: ({ dispatch }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Could be better...',
            text:
              'You should choose another communication channel to verify information because this channel might be compromised.',
            next: {
              taskId: 9,
              screenId: 'netflixpassword',
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
            title: 'Good job..?',
            text:
              'It is not a good idea to simply ignore emails from your boss',
            next: {
              taskId: 9,
              screenId: 'netflixpassword',
            },
          })
        );
        dispatch(gameActions.updatePoints({ points: 0 }));
      },
    },
    {
      text: 'Verify via SMS or call',
      onClick: ({ dispatch }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Smart choice!',
            text: 'This is the best way to confirm the identity of the sender.',
            next: {
              taskId: 9,
              screenId: 'netflixpassword',
            },
          })
        );
        dispatch(gameActions.updatePoints({ points: 10 }));
      },
    },
  ],
};

export default task8data;
