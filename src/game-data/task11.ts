import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import washingtonedu from 'assets/tasks/10/Websites-washington.edu2.png';

const task11data: TaskData = {
  title: 'Phishing - University of Washington',
  instructions: 'Determine if this website is safe or not.',
  setting:
    'One of your friends mentioned that they were going to the University of Washington, so you decided to check it out.',
  screens: {
    washingtonedu: {
      component: fromUrl(washingtonedu),
    },
  },
  buttons: [
    {
      text: 'Secure',
      onClick: ({ dispatch, state }) => {
        dispatch(
          gameActions.openFeedbackDialog({
            title: 'Be careful!',
            text:
              'http connections are not secure as no encryption in provided to secure your data. You shouldn’t put personal information in such sites.',
            next: { screenId: 'amazon', taskId: 12 },
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
              'http connections are not secure as no encryption in provided to secure your data. You shouldn’t put personal information in such sites.',
            next: { screenId: 'amazon', taskId: 12 },
          })
        );
        dispatch(gameActions.updatePoints({ points: 5 }));
      },
    },
  ],
};

export default task11data;
