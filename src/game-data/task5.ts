import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import emails from 'assets/tasks/5/Email- Emails.png';

const task5data: TaskData = {
    title: 'Emails',
    setting:
        'It is time to read your emails. In your mailbox, there are several emails.',
    instructions:
        'Investigate them and decide on your course of action.',
    description: 'Investigate them and decide on your course of action.',
    screens: {
        emails: {
            component: fromUrl(emails),
            buttons:[
                {
                    position:{left:"0%", top:"13.8888889%"},
                    size: {width:"22.65625%", height:"15.2777778%"}
                },
                {
                    position:{left:"0%", top:"29.1666667%"},
                    size: {width:"22.65625%", height:"15.2777778%"}
                },
                {
                    position:{left:"0%", top:"44.4444444%"},
                    size: {width:"22.65625%", height:"15.2777778%"}
                },
                {
                    position:{left:"0%", top:"59.7222222%"},
                    size: {width:"22.65625%", height:"15.2777778%"}
                },
                {
                    position:{left:"0%",top:"75%"},
                    size: {width:"22.65625%", height:"13.8888889%"}
                },
                {
                    position:{left:"0%", top:"88.88%"},
                    size: {width: "100%", height: "11.11%"}
                }
            ]
        },
    },
};

export default task5data;
