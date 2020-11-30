//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import washingtonpost from 'assets/tasks/10/Websites-Washington post.png';

const task13data: TaskData = {
  title: 'Phishing - Washington Post',
  instructions: 'Determine if this website is safe or not.',
  setting: 'After visiting social media, you decide to look at some news.',
  screens: {
    washingtonpost: {
      component: fromUrl(washingtonpost),
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
            title: 'Be careful!',
            text:
              'This site has a weird domain that does not match the real www.washingtonpost.com',
            next: { screenId: 'seb', taskId: 14 },
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
            title: 'Nice!',
            text:
              'You recognized that there is something wrong with the domain.',
            next: { screenId: 'seb', taskId: 14 },
          })
        );
        dispatch(gameActions.updatePoints({ points: 5 }));
      },
    },
  ],
};

export default task13data;
