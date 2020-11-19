import {TaskData} from "./index";
import {fromUrl} from "../components/AppImage";
import antiviruspopup from "../assets/tasks/2/antiviruspopup.png";

const task2data: TaskData = {
    title:'Antivirus',
    description:'Deal appropriately with default antivirus',
    screens: {
        antiviruspopup: {
            component: fromUrl(antiviruspopup),
            buttons: [
                // {
                //     position: {left: '92%', top: '94.5%'},
                //     size: {width: '2%', height: '4%'},
                //     onClick: (dispatch) => {
                //         dispatch(gameActions.setActiveScreenId({id: 'availablenetworks'}));
                //     },
                // },
            ],
        },
    }
}
export default task2data;