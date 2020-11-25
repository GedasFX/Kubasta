import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import changepassword from 'assets/tasks/3/changepassword.png';

const task1data: TaskData = {
  title: 'Choose a safe password.',
  setting: 'It has been 6 months since you have changed your password.',
  instructions: 'Choose a safe password.',
  description: 'Choose a safe password.',
  screens: {
    changepassword: {
      component: fromUrl(changepassword),
      buttons: [
        {
          position: { left: '92%', top: '94.5%' },
          size: { width: '2%', height: '4%' },
          onClick: ({ dispatch }) => {
            // dispatch(
            //   gameActions.setActiveScreenId({ id: 'availablenetworks' })
            // );
          },
        },
        {
          position: { left: '7.28%', top: '71.87%' },
          size: { width: '15.75%', height: '10.17%' },
          onClick: ({ dispatch, state }) => {
            const password = state.userInput['task3password'];

            let feedbackText =
              'You did not care to turn on Two-Factor-Verification (2FV)? Attackers will have access to your account in no time.';
            let points = 0;

            if (password.length >= 12) {
              points += 5;
              feedbackText += ' Bonus points for selecting a safe password';
            } else {
              points -= 5;
              feedbackText +=
                ' You’re also making it too easy! The password you chose was too easy to guess and compute. A safe password should have a minimum length of 12.';
            }

            dispatch(gameActions.updatePoints({ points }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: points > 0 ? 'Good job!' : 'Uh oh!',
                text: feedbackText,
                next: {
                  taskId: 4,
                  screenId: 'emails',
                },
              })
            );
          },
        },
        {
          position: { left: '48.63%', top: '71.87%' },
          size: { width: '32.02%', height: '10.17%' },
          onClick: ({ dispatch, state }) => {
            const password = state.userInput['task3password'];

            let feedbackText =
              'Good job for turning on Two-Factor-Verification (2FV).';
            let points = 10;

            if (password.length >= 12) {
              points += 5;
              feedbackText += ' Bonus points selecting a safe password';
            } else {
              points -= 5;
              feedbackText +=
                ' You’re also making it too easy! The password you chose was too easy to guess and compute. A safe password should have a minimum length of 12.';
            }

            dispatch(gameActions.updatePoints({ points }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: points > 0 ? 'Good job!' : 'Uh oh!',
                text: feedbackText,
                next: {
                  taskId: 4,
                  screenId: 'emails',
                },
              })
            );
          },
        },
      ],
      textFields: [
        {
          position: { left: '5.99%', top: '39.03%' },
          size: { height: '5.84%', width: '74.83%' },
          type: 'password',
        },
        {
          position: { left: '5.99%', top: '56.21%' },
          size: { height: '5.84%', width: '74.83%' },
          type: 'password',
          onChange: (value: string, { dispatch }) => {
            dispatch(gameActions.setUserInput({ key: 'task3password', value }));
          },
        },
      ],
    },
  },
};

export default task1data;
