import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import camera1 from 'assets/tasks/18/Websites-Camera 1.png';
import camera2 from 'assets/tasks/18/Websites- Camera 2.png';

const task18data: TaskData = {
  title: 'Permissions - Camera',
  setting:
    'You are browsing trough cute dog pics, and the website randomly asks you to allow your camera. What should you do?',
  instructions: 'Chose an option from the popup window.',
  screens: {
    camera1: {
      component: fromUrl(camera1),
      buttons: [
        // Allow
        {
          position: { top: '20.96%', left: '21.17%' },
          size: { height: '4.61%', width: '4.65%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.setActiveScreenId({ id: 'camera2' }));
            dispatch(gameActions.updatePoints({ points: -10 }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Be careful!',
                text:
                  'You shouldn’t allow websites to access everything they ask for, always think – why does this website need to use my camera?',
                next: {
                  taskId: 19,
                  screenId: 'ransomware',
                },
              })
            );
          },
        },
        // Block
        {
          position: { top: '21.12%', left: '26.80%' },
          size: { height: '4.61%', width: '4.56%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.setActiveScreenId({ id: 'camera2' }));
            dispatch(gameActions.updatePoints({ points: 10 }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Great!',
                text:
                  'You should only allow access when you know you need to use the camera.',
                next: {
                  taskId: 19,
                  screenId: 'ransomware',
                },
              })
            );
          },
        },
        // X
        {
          position: { top: '10.01%', left: '30.91%' },
          size: { height: '2.38%', width: '1.25%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.setActiveScreenId({ id: 'camera2' }));
            dispatch(gameActions.updatePoints({ points: 5 }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Good!',
                text:
                  'Clicking block will never make this pop up, but as long as you never click allow you are safe.',
                next: {
                  taskId: 19,
                  screenId: 'ransomware',
                },
              })
            );
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
    camera2: {
      component: fromUrl(camera2),
    },
  },
};

export default task18data;
