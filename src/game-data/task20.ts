import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import desktoppopup from 'assets/tasks/20/task16desktoppluspopupnew.png';

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
          position: { top: '49.73%', left: '40.92%' },
          size: { height: '2.74%', width: '8.33%' },
          onChange: (value: string, { dispatch }) => {
            dispatch(gameActions.setUserInput({ key: 'task20input1', value }));
          },
        },
        {
          position: { top: '49.89%', left: '56.49%' },
          size: { height: '2.57%', width: '8.33%' },
          onChange: (value: string, { dispatch }) => {
            dispatch(gameActions.setUserInput({ key: 'task20input2', value }));
          },
        },
      ],
      buttons: [
        {
          position: { top: '55.04%', left: '60.29%' },
          size: { height: '2.74%', width: '4.62%' },
          onClick: ({ dispatch, state }) => {
            const inputs = [
              state.userInput['task20input1'],
              state.userInput['task20input2'],
            ].map((i) => i?.toLowerCase());

            if (inputs.includes('win') && inputs.includes('l')) {
              dispatch(
                gameActions.openFeedbackDialog({
                  text:
                    'Locking your computer is a great skill to have and use! Always be sure to do so in case you are leaving your PC unattended. With this shortcut it only takes a second to keep your data private, as it should be.',
                })
              );
            } else {
              dispatch(
                gameActions.openFeedbackDialog({
                  text:
                    'Locking your computer is a great skill to have and use! Always be sure to do so in case you are leaving your PC unattended. The shortcut to do this is to press Win + L. Memorize it! It only takes a second to keep your data private, as all things should be.',
                })
              );
            }
          },
        },
      ],
    },
  },
};

export default task20data;
