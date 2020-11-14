import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import availablenetworks from 'assets/tasks/1/availablenetworks.png';
import chooseasprivatenetwork from 'assets/tasks/1/chooseasprivatenetwork.png';
import chooseaspublicnetwork from 'assets/tasks/1/chooseaspublicnetwork.png';
import connectedopennetwork from 'assets/tasks/1/connectedopennetwork.png';
import connectedsecurenetwork from 'assets/tasks/1/connectedsecurenetwork.png';
import desktopnetworkconnected from 'assets/tasks/1/desktopnetworkconnected.png';
import desktopnetworknotconnected from 'assets/tasks/1/desktopnetworknotconnected.png';
import pressonopennetwork from 'assets/tasks/1/pressonopennetwork.png';
import pressonsecurenetwork from 'assets/tasks/1/pressonsecurenetwork.png';
import typeinpassword from 'assets/tasks/1/typeinpassword.png';

const task1data: TaskData = {
  description:'Description of task 1',
  screens: {
    desktopnetworknotconnected: {
      component: fromUrl(desktopnetworknotconnected),
      buttons: [
        {
          position: {left: '92%', top: '94.5%'},
          size: {width: '2%', height: '4%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'availablenetworks'}));
          },
        },
      ],
    },
    availablenetworks: {
      component: fromUrl(availablenetworks),
      buttons: [
        {
          position: {left: '92%', top: '94.5%'},
          size: {width: '2%', height: '4%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'desktopnetworknotconnected'}));
          },
        },
        {
          position: {left: '77%', top: '28%'},
          size: {width: '22%', height: '8%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'pressonopennetwork'}));
          },
        },
        {
          position: {left: '77%', top: '36%'},
          size: {width: '22%', height: '8%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'pressonsecurenetwork'}));
          },
        }
      ],
    },
    pressonsecurenetwork: {
      component: fromUrl(pressonsecurenetwork),
      buttons: [
        {
          position: {left: '92%', top: '94.5%'},
          size: {width: '2%', height: '4%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'desktopnetworknotconnected'}));
          },
        },
      ]
    },
    pressonopennetwork: {
      component: fromUrl(pressonopennetwork),
      buttons: [
        {
          position: {top: '10%', left: '10%'},
          size: {width: '20%', height: '20%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'Second'}));
          },
        },

      ]
    }
  }
};

export default task1data;
