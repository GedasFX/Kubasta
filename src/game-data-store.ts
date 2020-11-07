import { AppDispatch } from './store';
import { gameActions } from './store/game';

import image_1 from './media/bg/ee72e41123a09d160822985d61668c18.jpg';

export interface GameObject {
  imageUrl: string;
  buttons: {
    position: { top: number | string; left: number | string };
    size: { width: number | string; height: number | string };
    onClick?: (dispatch: AppDispatch) => void;
  }[];
}

const data: { [key: string]: GameObject } = {
  1: {
    imageUrl: image_1,
    buttons: [
      {
        position: { top: '10%', left: '10%' },
        size: { width: '20%', height: '20%' },
        onClick: (dispatch) => {
          dispatch(gameActions.setActiveItemId({ id: 2 }));
        },
      },
      {
        position: { top: '40%', left: '10%' },
        size: { width: '20%', height: '20%' },
        onClick: () => window.alert('Congratulations'),
      },
    ],
  },
};

export default data;
