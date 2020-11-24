import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';
import { POINTS_WRONG_ANSWER } from './';

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
      ],
    },
  },
};

export default task1data;
