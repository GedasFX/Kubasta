import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import facebouk from 'assets/tasks/10/Websites-Facebouk.png';

const task10data: TaskData = {
  title: 'Phishing - Facebook',
  instructions: 'Determine if this website is safe or not.',
  setting: 'After reading emails you have decided to visit social media.',
  screens: {
    facebook: {
      component: fromUrl(facebouk),
    },
  },
  buttons: [
    {
      text: 'Secure',
      onClick: ({ dispatch, state }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Stay vigilant!',
            text:
              'Be careful and look at the URL again – “www.facebouk.com” is not the real Facebook! Someone is trying to steal your login information.',
            next: { screenId: 'washingtonedu', taskId: 11 },
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
            title: 'Good job!',
            text:
              '“www.facebouk.com” is not the real Facebook! Someone tried to steal your login information.',
            next: { screenId: 'washingtonedu', taskId: 11 },
          })
        );
        dispatch(gameActions.updatePoints({ points: 5 }));
      },
    },
  ],
};

export default task10data;
