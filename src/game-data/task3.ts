import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import changepassword from 'assets/tasks/3/changepassword.png';

const task1data: TaskData = {
  title: 'Choose a safe password.',
  setting:
    'It has been 6 months since you have changed your password.',
  instructions:
    'Choose a safe password.',
  description: 'Choose a safe password.',
  screens: {
    changepassword: {
      component: fromUrl(changepassword),
      buttons: [
        {
          position: { left: '92%', top: '94.5%' },
          size: { width: '2%', height: '4%' },
          onClick: (dispatch) => {
            // dispatch(
            //   gameActions.setActiveScreenId({ id: 'availablenetworks' })
            // );
          },
        },
        {
          position: { left: '7.28%', top: '71.87%' },
          size: { width: '15.75%', height: '10.17%' },
          onClick: (dispatch) => {
            dispatch(
              gameActions.task3Feedback({ twoFactorSelected:true })
            );
          },
        },
        {
          position: { left: '48.63%', top: '71.87%' },
          size: { width: '32.02%', height: '10.17%' },
          onClick: (dispatch) => {
            dispatch(
              gameActions.task3Feedback({twoFactorSelected:false})
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
          onChange: ((newValue:string, dispatch) => {
            console.log('new input value: ' + newValue);
            dispatch(gameActions.setUserInput({userInput:newValue}));
          })
        },
      ],
    },
  },
};

export default task1data;
