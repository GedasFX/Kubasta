import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import camera1 from 'assets/tasks/18/Websites-Camera 1.png';
import camera2 from 'assets/tasks/18/Websites- Camera 2.png';

const task18data: TaskData = {
  title: 'Locked computer',
  setting: 'You are browsing trough cute dog pics',
  instructions:
    'This random website is asking permission to use your camera. What will you do?',
  description: 'Website requests camera.',
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
                text:
                  'Be careful! You shouldn’t allow websites to access everything they ask for, always think – why does this website need to use my camera?',
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
                text:
                  'Great! You should only allow access when you know you need to use the camera.',
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
                text:
                  'Good! Clicking block will never make this pop up, but as long as you never click allow you are safe.',
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
