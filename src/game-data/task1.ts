import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import availablenetworks from 'assets/tasks/1/availablenetworks.png';
import connectedopennetwork from 'assets/tasks/1/connectedopennetwork.png';
import connectedsecurenetwork from 'assets/tasks/1/connectedsecurenetwork.png';
import discoverableonnetwork from 'assets/tasks/1/discoverableonnetwork.png';
import desktopnetworknotconnected from 'assets/tasks/1/desktopnetworknotconnected.png';
import pressonopennetwork from 'assets/tasks/1/pressonopennetwork.png';
import pressonsecurenetwork from 'assets/tasks/1/pressonsecurenetwork.png';
import typeinpassword from 'assets/tasks/1/typeinpassword.png';

const task1data: TaskData = {
  title:'Internet Connection',
  description:'Connect safely to the internet',
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
          //network icon in desktop bar
        {
          position: {left: '92%', top: '94.5%'},
          size: {width: '2%', height: '4%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'desktopnetworknotconnected'}));
          },
        },
          //connect button
        {
          position: {top: '48.5%', left: '89.5%'},
          size: {width: '9.5%', height: '4%'},
          onClick: (dispatch)=> {
            dispatch(gameActions.setActiveScreenId({id: 'typeinpassword'}));
          }
        },
          //open network button
        {
          position: {top: '28.1%', left: '76.4%'},
          size: {width: '24%', height: '8%'},
          onClick: (dispatch)=> {
            dispatch(gameActions.setActiveScreenId({id: 'pressonopennetwork'}));
          }
        },
      ]
    },
    pressonopennetwork: {
      component: fromUrl(pressonopennetwork),
      buttons: [
          //network icon in desktop bar
        {
          position: {left: '92%', top: '94.5%'},
          size: {width: '2%', height: '4%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'desktopnetworknotconnected'}));
          },
        },
          //secure network button
        {
          position: {left: '76.6%', top: '50.9%'},
          size: {width: '24%', height: '8%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'pressonsecurenetwork'}));
          },
        },
          //connect button
        {
          position: {left: '89.5%', top: '45.45%'},
          size: {width: '9.5%', height: '3.5%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id:'connectedopennetwork'}));
          }
        },
      ]
    },
    typeinpassword: {
      component: fromUrl(typeinpassword),
      buttons: [
        //network icon in desktop bar
        {
          position: {left: '92%', top: '94.5%'},
          size: {width: '2%', height: '4%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'desktopnetworknotconnected'}));
          },
        },
        //open network button
        {
          position: {top: '28.1%', left: '76.4%'},
          size: {width: '24%', height: '8%'},
          onClick: (dispatch)=> {
            dispatch(gameActions.setActiveScreenId({id: 'pressonopennetwork'}));
          }
        },
        //next button (after password entered)
        {
          position: {top: '52.1%', left: '79.7%'},
          size: {width: '9.7%', height: '3.8%'},
          onClick: (dispatch)=> {
            dispatch(gameActions.setActiveScreenId({id: 'discoverableonnetwork'}));
          }
        },
      ],
    },
    connectedopennetwork: {
      component:fromUrl(connectedopennetwork),
      buttons:[
        //secure network button
        {
          position: {left: '76.6%', top: '46.17%'},
          size: {width: '24%', height: '8%'},
          onClick: (dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'pressonsecurenetwork'}));
          },
        },
      ],
    },
    connectedsecurenetwork: {
      component:fromUrl(connectedsecurenetwork),
      buttons:[],
    },
    discoverableonnetwork: {
      component:fromUrl(discoverableonnetwork),
      buttons:[
        {
          position: {top: '59%', left: '79.7%'},
          size: {width: '9.7%', height: '3.8%'},
          onClick:(dispatch) => {
            dispatch(gameActions.setActiveScreenId({id: 'connectedsecurenetwork'}));
            dispatch(gameActions.toggleFeedbackDialog());
          }
        },
        {
          position: {top: '59%', left: '89.5%'},
          size: {width: '9.7%', height: '3.8%'},
          onClick:() => {window.alert('fail')}
        }
      ]
    }
  }
};

export default task1data;
