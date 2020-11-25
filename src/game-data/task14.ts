//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import seb from 'assets/tasks/10/Websites-SEB.png';

const task14data: TaskData = {
  title: 'SEB bank',
  description: 'You have to determine whether a website is secure or not.',
  instructions: '',
  setting: 'You have to determine whether a website is secure or not.',
  screens: {
    seb: {
      component: fromUrl(seb),
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
            next: { screenId: 'nytimes', taskId: 15 },
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
            next: { screenId: 'nytimes', taskId: 15 },
          })
        );
        dispatch(gameActions.updatePoints({ points: -5 }));
      },
    },
  ],
};

export default task14data;
