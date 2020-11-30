//Websites-Amazon2
import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import mitm from 'assets/tasks/11/Websites-MitM(2).png';
import mitm2 from 'assets/tasks/11/Websites-MitM.png';

const task16data: TaskData = {
  title: 'HTTPS errors',
  instructions:
    'Decide what button you should press on the website to get out of this mess.',
  setting:
    'You followed a link in the news site from an ad and this warning showed up. What should you do?',
  screens: {
    mitm: {
      component: fromUrl(mitm),
      buttons: [
        //advanced
        {
          position: { top: '70.78%', left: '28.13%' },
          size: { height: '3.96%', width: '6.59%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.setActiveScreenId({ id: 'mitm2' }));
          },
        },
        //back to safety
        {
          position: { top: '70.62%', left: '63.74%' },
          size: { height: '3.96%', width: '8.05%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Good!',
                next: { taskId: 17, screenId: 'movies' },
                text:
                  'This site does not have appropriate security measures implemented, it is better to not visit such sites.',
              })
            );
            dispatch(gameActions.updatePoints({ points: 10 }));
          },
        },
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
    mitm2: {
      component: fromUrl(mitm2),
      buttons: [
        //hide advanced
        {
          position: { top: '69.71%', left: '27.53%' },
          size: { height: '3.81%', width: '8.65%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.setActiveScreenId({ id: 'mitm' }));
          },
        },
        //back to safety
        {
          position: { top: '69.25%', left: '63.14%' },
          size: { height: '4.11%', width: '8.13%' },
        },
        //proceed anyway
        {
          position: { top: '90.87%', left: '27.44%' },
          size: { height: '2.74%', width: '14.13%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Be careful!',
                next: { taskId: 17, screenId: 'movies' },
                text:
                  'This site does not have appropriate security measures implemented, it is better to not visit such sites.',
              })
            );
            dispatch(gameActions.updatePoints({ points: -10 }));
          },
        },
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
};

export default task16data;
