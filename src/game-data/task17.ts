import { TaskData } from '.';
import { fromUrl } from '../components/AppImage';
import { gameActions } from 'store/game';

import movies from 'assets/tasks/12/Websites-Movies online.png';
const nextTaskId = 18;
const nextScreenId = 'camera1';

const task17data: TaskData = {
    title:'Movies',
    setting: 'You have a date and you are about to chill but protection comes first. Choose a safe option for watching a movie in the recent links.',
    description: 'You have a date and you are about to chill but protection comes first. Choose a safe option for watching a movie.',
    instructions: 'Choose a safe option for watching a movie.',
    screens: {
        movies: {
            component: fromUrl(movies),
            buttons: [
                // 0.30234375	0.647222222	0.0390625	0.069444444
                {
                    position: {left:"30.234375%", top:"64.7222222%"},
                    size: {width:"3.90625%", height:"6.9444444%"},
                    onClick:({dispatch}) => {
                        dispatch(gameActions.openFeedbackDialog({
                            text: "Poor choice! Downloading content here is not only illegal but can also come with hidden malware!",
                            next: {screenId:nextScreenId, taskId: nextTaskId}
                        }))
                    }
                },
                // 0.38984375	0.647222222	0.0390625	0.069444444
                {
                    position: {left:"38.984375%", top:"64.7222222%"},
                    size: {width:"3.90625%", height:"6.9444444%"},
                    onClick:({dispatch}) => {
                        dispatch(gameActions.openFeedbackDialog({
                            text: "Nice! Using an official streaming platform is a safe and legitimate way to enjoy movies and TV shows online.",
                            next: {screenId:nextScreenId, taskId: nextTaskId}
                        }))
                    }
                },
                // 0.47734375	0.647222222	0.0390625	0.069444444
                {
                    position: {left:"47.734375%", top:"64.7222222%"},
                    size: {width:"3.90625%", height:"6.9444444%"},
                    onClick:({dispatch}) => {
                        dispatch(gameActions.openFeedbackDialog({
                            text: "Be careful! Content there is published illegally, and this site is full of aggressive ads, your computer might catch a virus!",
                            next: {screenId:nextScreenId, taskId: nextTaskId}
                        }))
                    }
                },
                // 0.56484375	0.647222222	0.0390625	0.069444444
                {
                    position: {left:"56.484375%", top:"64.7222222%"},
                    size: {width:"3.90625%", height:"6.9444444%"},
                    onClick:({dispatch}) => {
                        dispatch(gameActions.openFeedbackDialog({
                            text: "Nice! Using an official streaming platform is a safe and legitimate way to enjoy movies and TV shows online.",
                            next: {screenId:nextScreenId, taskId: nextTaskId}
                        }))
                    }
                },
                // 0.65234375	0.647222222	0.0390625	0.069444444
                {
                    position: {left:"65.234375%", top:"64.7222222%"},
                    size: {width:"3.90625%", height:"6.9444444%"},
                    onClick:({dispatch}) => {
                        dispatch(gameActions.openFeedbackDialog({
                            text: "Be careful! Content there is published illegally, and this site is full of aggressive ads, your computer might catch a virus!",
                            next: {screenId:nextScreenId, taskId: nextTaskId}
                        }))
                    }
                },
            ]
        }
    },
}

export default task17data;