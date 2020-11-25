import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import attachment from 'assets/tasks/5/Email- Attachment.png';

const task5data: TaskData = {
  title: 'Malicious email attachment',
  setting: 'This email appears to be from an unknown sender.',
  instructions: 'Investigate and decide on your course of action.',
  description: 'Investigate and decide on your course of action.',
  screens: {
    attachment: {
      component: fromUrl(attachment),
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
                  taskId: 6,
                  screenId: 'link',
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
                  taskId: 6,
                  screenId: 'link',
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
                  taskId: 6,
                  screenId: 'link',
                },
              })
            );
            dispatch(gameActions.updatePoints({ points: 5 }));
          },
        },
        //attachment button
        {
          position: { left: '24.609375%', top: '43.6111111%' },
          size: { width: '14.0625%', height: '5.5555556%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.openFeedbackDialog({
                text:
                  'Never download email attachments from unverified sources, attachments may contain hidden malware.',
                next: {
                  taskId: 6,
                  screenId: 'link',
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

export default task5data;
