import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';
import { POINTS_WRONG_ANSWER } from './';

import availablenetworks from 'assets/tasks/1/availablenetworks.png';
import connectedopennetwork from 'assets/tasks/1/connectedopennetwork.png';
import connectedsecurenetwork from 'assets/tasks/1/connectedsecurenetwork.png';
import discoverableonnetwork from 'assets/tasks/1/discoverableonnetwork.png';
import desktopnetworknotconnected from 'assets/tasks/1/desktopnetworknotconnected.png';
import pressonopennetwork from 'assets/tasks/1/pressonopennetwork.png';
import pressonsecurenetwork from 'assets/tasks/1/pressonsecurenetwork.png';
import typeinpassword from 'assets/tasks/1/typeinpassword.png';

const task1data: TaskData = {
  title: 'Connect to Network',
  setting:
    'You just ordered your first coffee of the day at Starbucks. You were going to meet up there with a friend later but want to get some work done first. The cashier hands you the receipt – it has the WIFI password on it: “starplatinum”. Perfect. Time to get to work.',
  instructions:
    'To go online you need to connect to the network. This location has both an open and a password-protected network. Which one do you choose?',
  description: 'Connect safely to the internet',
  screens: {
    desktopnetworknotconnected: {
      component: fromUrl(desktopnetworknotconnected),
      buttons: [
        {
          position: { left: '92%', top: '94.5%' },
          size: { width: '2%', height: '4%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'availablenetworks' })
            );
          },
        },
      ],
    },
    availablenetworks: {
      component: fromUrl(availablenetworks),
      buttons: [
        {
          position: { left: '92%', top: '94.5%' },
          size: { width: '2%', height: '4%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({
                id: 'desktopnetworknotconnected',
              })
            );
          },
        },
        {
          position: { left: '77%', top: '28%' },
          size: { width: '22%', height: '8%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'pressonopennetwork' })
            );
          },
        },
        {
          position: { left: '77%', top: '36%' },
          size: { width: '22%', height: '8%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'pressonsecurenetwork' })
            );
          },
        },
      ],
    },
    pressonsecurenetwork: {
      component: fromUrl(pressonsecurenetwork),
      buttons: [
        //network icon in desktop bar
        {
          position: { left: '92%', top: '94.5%' },
          size: { width: '2%', height: '4%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({
                id: 'desktopnetworknotconnected',
              })
            );
          },
        },
        //connect button
        {
          position: { top: '48.5%', left: '89.5%' },
          size: { width: '9.5%', height: '4%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.setActiveScreenId({ id: 'typeinpassword' }));
          },
        },
        //open network button
        {
          position: { top: '28.1%', left: '76.4%' },
          size: { width: '24%', height: '8%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'pressonopennetwork' })
            );
          },
        },
      ],
    },
    pressonopennetwork: {
      component: fromUrl(pressonopennetwork),
      buttons: [
        //network icon in desktop bar
        {
          position: { left: '92%', top: '94.5%' },
          size: { width: '2%', height: '4%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({
                id: 'desktopnetworknotconnected',
              })
            );
          },
        },
        //secure network button
        {
          position: { left: '76.6%', top: '50.9%' },
          size: { width: '24%', height: '8%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'pressonsecurenetwork' })
            );
          },
        },
        //connect button
        {
          position: { left: '89.5%', top: '45.45%' },
          size: { width: '9.5%', height: '3.5%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.updatePoints({ points: POINTS_WRONG_ANSWER }));
            dispatch(
              gameActions.setActiveScreenId({ id: 'connectedopennetwork' })
            );
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'Oh no! Open networks should be avoided whenever possible. Accessing sensitive information on such networks can result in that data getting compromised, e.g. login data to your banking. If given the choice, it is usually better to connect to a secured network.',
                next: {
                  taskId: 1,
                  screenId: 'desktopnetworknotconnected',
                },
              })
            );
          },
        },
      ],
    },
    typeinpassword: {
      component: fromUrl(typeinpassword),
      buttons: [
        //network icon in desktop bar
        {
          position: { left: '92%', top: '94.5%' },
          size: { width: '2%', height: '4%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({
                id: 'desktopnetworknotconnected',
              })
            );
          },
        },
        //open network button
        {
          position: { top: '28.1%', left: '76.4%' },
          size: { width: '24%', height: '8%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'pressonopennetwork' })
            );
          },
        },
        //next button (after password entered)
        {
          position: { top: '52.1%', left: '79.7%' },
          size: { width: '9.7%', height: '3.8%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'discoverableonnetwork' })
            );
          },
        },
      ],
      textFields: [
        {
          position: { left: '79.8%', top: '47.3%' },
          size: { height: '03.2%', width: '18.9%' },
          type: 'password',
        },
      ],
    },
    connectedopennetwork: {
      component: fromUrl(connectedopennetwork),
      buttons: [
        //secure network button
        {
          position: { left: '76.6%', top: '46.17%' },
          size: { width: '24%', height: '8%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'pressonsecurenetwork' })
            );
          },
        },
      ],
    },
    connectedsecurenetwork: {
      component: fromUrl(connectedsecurenetwork),
      buttons: [],
    },
    discoverableonnetwork: {
      component: fromUrl(discoverableonnetwork),
      buttons: [
        {
          position: { top: '59%', left: '79.7%' },
          size: { width: '9.7%', height: '3.8%' },
          onClick: () => {
            window.alert('fail');
          },
        },
        {
          position: { top: '59%', left: '89.5%' },
          size: { width: '9.7%', height: '3.8%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'connectedsecurenetwork' })
            );
            dispatch(gameActions.updatePoints({ points: 10 }));
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'Good! It’s always better to leave attackers the least possible amount of attack surface, which you just did.',
                next: {
                  screenId: 'antiviruspopup',
                  taskId: 2,
                },
              })
            );
          },
        },
      ],
    },
  },
  buttons: [
    {
      text: 'dawdawa',
      onClick: ({ dispatch, state }) => {
        console.log(dispatch, state);
      },
    },
    {
      text: 'dawdawa',
      onClick: ({ dispatch, state }) => {
        console.log(dispatch, state);
      },
    },
    {
      text: 'dawdawa',
      onClick: ({ dispatch, state }) => {
        console.log(dispatch, state);
      },
    },
    {
      text: 'dawdawa',
      onClick: ({ dispatch, state }) => {
        console.log(dispatch, state);
      },
    },
    {
      text: 'dawdawa',
      onClick: ({ dispatch, state }) => {
        console.log(dispatch, state);
      },
    },
  ],
};

export default task1data;
