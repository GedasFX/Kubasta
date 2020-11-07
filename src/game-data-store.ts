import { AppDispatch } from './store';
import { gameActions } from './store/game';

import image_1 from './media/bg/ee72e41123a09d160822985d61668c18.jpg';
import image_2 from './media/bg/648uTUS.jpg';

export interface GameObject {
  imageUrl: string;
  buttons: {
    position: { top: number | string; left: number | string };
    size: { width: number | string; height: number | string };
    onClick?: (dispatch: AppDispatch) => void;
  }[];
}

const data: { [key: string]: GameObject } = {
  First: {
    imageUrl: image_1,
    buttons: [
      {
        position: { top: '10%', left: '10%' },
        size: { width: '20%', height: '20%' },
        onClick: (dispatch) => {
          dispatch(gameActions.setActiveItemId({ id: 'Second' }));
        },
      },
      {
        position: { top: '40%', left: '10%' },
        size: { width: '20%', height: '20%' },
        onClick: () => window.alert('Congratulations'),
      },
    ],
  },
  Second: {
    imageUrl: image_2,
    buttons: [
      {
        position: { top: '10%', left: '10%' },
        size: { width: '20%', height: '20%' },
        onClick: (dispatch) => {
          dispatch(gameActions.setActiveItemId({ id: 'First' }));
        },
      },
      {
        position: { top: '40%', left: '10%' },
        size: { width: '20%', height: '20%' },
        onClick: () => window.alert('Not congratulations'),
      },
    ],
  },
};

export default data;
