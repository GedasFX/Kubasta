import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import welcome from 'assets/tasks/0/welcome_screen.png';
import gameover from 'assets/tasks/0/lockscreen.png';

const task0data: TaskData = {
  title: 'Welcome!',
  instructions:
    'Feel free to click around the environment. Click the button on the desktop when you wish to begin.',
  screens: {
    welcome: {
      component: fromUrl(welcome),
      buttons: [
        {
          position: { top: '67.16%', left: '41.18%' },
          size: { height: '17.06%', width: '17.55%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveTaskId({
                id: 1,
              })
            );
            dispatch(
              gameActions.setActiveScreenId({
                id: 'desktopnetworknotconnected',
              })
            );
          },
        },
      ],
    },
    gameover: {
      component: fromUrl(gameover),
    },
  },
};

export default task0data;
