//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import nytimes from 'assets/tasks/10/Websites- NY times.png';

const task15data: TaskData = {
  title: 'Phishing - The New York Times',
  //   description: 'You have to determine whether a website is secure or not.',
  instructions: 'Determine if this website is safe or not.',
  setting:
    'After looking at your bank account, you get bored and go at more news on a different news source. Something appears wrong but you cannot put your finger on it.',
  screens: {
    nytimes: {
      component: fromUrl(nytimes),
      buttons: [
        {
          position: { top: '5.07%', left: '89.98%' },
          size: { height: '3.44%', width: '7.94%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Adblock is useful!',
                text:
                  'Adblock not only hides annoying ads, it may also protect your from malicious ads that may cause actual harm. If you haven’t already, you should go to your browser extensions and enable Adblock on your browser.',
              })
            );
          },
        },
      ],
    },
  },
  buttons: [
    {
      text: 'Secure',
      onClick: ({ dispatch, state }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Incorrect!',
            text:
              'Inspect the logo and URL again. Nor logo, nor URL match the real NY times.',
            next: { screenId: 'mitm', taskId: 16 },
          })
        );
        dispatch(gameActions.updatePoints({ points: -5 }));
      },
    },
    {
      text: 'Not secure',
      onClick: ({ dispatch, state }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Correct!',
            text: 'You noticed the wrong logo and URL!',
            next: { screenId: 'mitm', taskId: 16 },
          })
        );
        dispatch(gameActions.updatePoints({ points: 5 }));
      },
    },
  ],
};

export default task15data;
