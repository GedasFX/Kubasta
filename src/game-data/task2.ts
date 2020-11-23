import { TaskData } from './index';
import { fromUrl } from '../components/AppImage';
import antiviruspopup from '../assets/tasks/2/antiviruspopup.png';
import antivirussettingsoff from '../assets/tasks/2/antivirussettingsoff.png';
import { gameActions } from 'store/game';
const task2data: TaskData = {
  title: 'Antivirus',
  description: 'Deal appropriately with default antivirus',
  screens: {
    antiviruspopup: {
      component: fromUrl(antiviruspopup),
      buttons: [
        {
            position: {left: '75.3%', top: '78.23%'},
            size: {width: '23.37%', height: '15.68%'},
            onClick: (dispatch) => {
                dispatch(gameActions.setActiveScreenId({id: 'antivirussettingsoff'}));
            },
        },
      ],
    },
    antivirussettingsoff: {
      component: fromUrl(antivirussettingsoff),
      buttons: [
        {
          position: {left: '38.88%', top: '50.53%'},
          size: {width: '2.75%', height: '2.35%'},
          onClick: (dispatch) => {
            window.alert('yes');
          },
        },
        {
          position: {left: '79.32%', top: '1.22%'},
          size: {width: '2.65%', height: '3.35%'},
          onClick: (dispatch) => {
            window.alert('no');
          },
        }
      ]
    }
  },
};
export default task2data;
