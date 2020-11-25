import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import ransomwaredesktop from 'assets/tasks/19/ransomwaredesktop.png';

const task19data: TaskData = {
  title: 'Ransomware',
  setting: 'After doing some tasks you notice a popup on the screen.',
  instructions:
    'Look at the ransomware alert and choose the best action in this situation.',
  description: 'Ransomware attack has occurred.',
  screens: {
    ransomware: {
      component: fromUrl(ransomwaredesktop),
      buttons: [
        // Close button
        {
          position: { top: '17.94%', left: '76.41%' },
          size: { height: '3.68%', width: '2.07%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.updatePoints({ points: 10 }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Good job!',
                text: 'You know not to trust weird popups.',
                next: {
                  taskId: 20,
                  screenId: 'main',
                },
              })
            );
          },
        },
        {
          position: { top: '57.49%', left: '25.05%' },
          size: { height: '14.42%', width: '48.56%' },
          onClick: ({ dispatch, state }) => {
            dispatch(gameActions.gameOver());
            dispatch(gameActions.updatePoints({ points: -state.points }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'What?!',
                text:
                  'Do you just click any link you see? The first step would be to check if your files are corrupted, and even then, clicking a link is most likely what the attacker wants you to do. How can you trust the word of someone who encrypted your files in the first place?',
                next: {
                  taskId: '0',
                  screenId: 'gameover',
                },
              })
            );
          },
        },
      ],
    },
  },
};

export default task19data;
