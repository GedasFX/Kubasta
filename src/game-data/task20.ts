import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import desktoppopup from 'assets/tasks/20/desktoppopup.png';

const task20data: TaskData = {
  title: 'Locked computer',
  setting:
    'You see your friend entering the shop – seems like you did not have time to get much done after all, but at least you are set up for next time!',
  instructions:
    "Now all that is left to do is to lock your computer. Do you know the shortcut? Note: type 'win' for windows key.",
  description: 'Ransomware attack has occurred.',
  screens: {
    main: {
      component: fromUrl(desktoppopup),
      textFields: [
        {
          position: { top: '55.36%', left: '43.00%' },
          size: { height: '2.90%', width: '8.24%' },
        },
        {
          position: { top: '55.36%', left: '53.95%' },
          size: { height: '2.90%', width: '8.33%' },
        },
      ],
    },
  },
};

export default task20data;
