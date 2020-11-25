//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import nytimes from 'assets/tasks/10/Websites- NY times.png';

const task15data: TaskData = {
  title: 'New York Times',
  description: 'You have to determine whether a website is secure or not.',
  instructions: '',
  setting: 'You have to determine whether a website is secure or not.',
  screens: {
    nytimes: {
      component: fromUrl(nytimes),
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
            text: 'You the wrong logo and URL!',
            next: { screenId: 'mitm', taskId: 16 },
          })
        );
        dispatch(gameActions.updatePoints({ points: 5 }));
      },
    },
  ],
};

export default task15data;
