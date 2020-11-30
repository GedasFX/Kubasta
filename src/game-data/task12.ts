//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import amazon from 'assets/tasks/10/Websites-Amazon2.png';

const task12data: TaskData = {
  title: 'Phishing - Amazon',
  instructions: 'Determine if this website is safe or not.',
  setting:
    'You were notified that one of your friends birthday was coming up so you go to Amazon to buy them a gift.',
  screens: {
    amazon: {
      component: fromUrl(amazon),
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
            title: 'Correct!',
            text: 'There is nothing wrong with this site!',
            next: { screenId: 'washingtonpost', taskId: 13 },
          })
        );
        dispatch(gameActions.updatePoints({ points: 5 }));
      },
    },
    {
      text: 'Not secure',
      onClick: ({ dispatch, state }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Wrong!',
            text: 'There is nothing wrong with this site!',
            next: { screenId: 'washingtonpost', taskId: 13 },
          })
        );
        dispatch(gameActions.updatePoints({ points: -5 }));
      },
    },
  ],
};

export default task12data;
