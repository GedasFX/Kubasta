import { TaskData } from './index';
import { fromUrl } from '../components/AppImage';
import antiviruspopup from '../assets/tasks/2/antiviruspopup.png';
import antivirussettingsoff from '../assets/tasks/2/antivirussettingsoff.png';
import antivirussettingson from '../assets/tasks/2/antivirussettingson.png';
import { gameActions } from 'store/game';
const task2data: TaskData = {
  title: 'Antivirus',
  setting: 'A popup appeared saying virus protection is off, how curious...',
  instructions: 'To complete this task you should enable the antivirus',
  description: 'Deal appropriately with default antivirus.',
  screens: {
    antiviruspopup: {
      component: fromUrl(antiviruspopup),
      buttons: [
        {
          position: { left: '75.3%', top: '78.23%' },
          size: { width: '23.37%', height: '15.68%' },
          onClick: ({ dispatch }) => {
            dispatch(
              gameActions.setActiveScreenId({ id: 'antivirussettingsoff' })
            );
          },
        },
      ],
    },
    antivirussettingsoff: {
      component: fromUrl(antivirussettingsoff),
      buttons: [
        {
          position: { left: '38.88%', top: '50.53%' },
          size: { width: '2.75%', height: '2.35%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.updatePoints({ points: 10 }));
            dispatch(
              gameActions.setActiveScreenId({ id: 'antivirussettingson' })
            );
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'Alright!',
                text:
                  'Now you are finally protected from known threats again. Never turn off your antivirus program, even if a software asks for it!',
                next: {
                  screenId: 'changepassword',
                  taskId: 3,
                },
              })
            );
          },
        },
        {
          position: { left: '79.32%', top: '1.22%' },
          size: { width: '2.65%', height: '3.35%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.updatePoints({ points: -10 }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'What are you doing?!',
                text:
                  'You were supposed to turn on the antivirus software! Even just the default Windows virus & threat protection will keep you safe from known malware and attacks.',
                next: {
                  screenId: 'changepassword',
                  taskId: 3,
                },
              })
            );
          },
        },
        {
          position: { left: '38.88%', top: '75.5%' },
          size: { width: '2.65%', height: '2.35%' },
          onClick: ({ dispatch }) => {
            dispatch(gameActions.updatePoints({ points: -10 }));
            dispatch(
              gameActions.openFeedbackDialog({
                title: 'What are you doing?!',
                text:
                  'You were supposed to turn on the antivirus software, not turn it off even further! Even just the default Windows virus & threat protection will keep you safe from known malware and attacks.',
                next: {
                  screenId: 'changepassword',
                  taskId: 3,
                },
              })
            );
          },
        },
      ],
    },
    antivirussettingson: {
      component: fromUrl(antivirussettingson),
    },
  },
};
export default task2data;
