import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import link from 'assets/tasks/6/Email- Link.png';

const task6data: TaskData = {
  title: 'Emails',
  setting:
    'It is time to read your emails. In your mailbox, there are several emails.',
  instructions: 'Investigate them and decide on your course of action.',
  description: 'Investigate them and decide on your course of action.',
  screens: {
    link: {
      component: fromUrl(link),
      buttons: [
        //reply button
        {
          position: { left: '75.78125%', top: '9.5333333%' },
          size: { width: '6.71875%', height: '4.5833333%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'Do not engage in conversations with a scammer, you may not notice revealing valuable information about yourself.',
                next: {
                  taskId: 7,
                  screenId: 'blackmail',
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: -5 }));
          },
        },
        //report spam button
        {
          position: { left: '83.59375%', top: '9.5333333%' },
          size: { width: '6.71875%', height: '4.5833333%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'Smart! Reporting spam helps your email’s algorithms to recognize suspicious emails as spam.',
                next: {
                  taskId: 7,
                  screenId: 'blackmail',
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: 10 }));
          },
        },
        //close button
        {
          position: { left: '91.40625%', top: '9.5333333%' },
          size: { width: '6.71875%', height: '4.5833333%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text: 'Good! Ignoring suspicious emails is one way to do it.',
                next: {
                  taskId: 7,
                  screenId: 'blackmail',
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: 5 }));
          },
        },
        //link button
        {
          position: { left: '41.40625%', top: '34.7222222%' },
          size: { width: '26.5625%', height: '2.7777778%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'NEVER click on links in suspicious emails. Links may take you to infected websites or even auto-download malicious files.',
                next: {
                  taskId: 7,
                  screenId: 'blackmail',
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: -10 }));
          },
        },
        {
          position: { left: '0%', top: '88.88%' },
          size: { width: '100%', height: '11.11%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'Game over! Don’t get tricked by malicious ads. That’s how you actually infect your computer.',
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
  },
};

export default task6data;
