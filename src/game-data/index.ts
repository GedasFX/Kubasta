import { AppDispatch } from '../store';
import task1data from './task1';
import task2data from './task2';

export interface TaskData {
  title:string;
  screens: {[key: string]: ScreenData};
  description: string;
}

export interface ScreenData {
  component: React.ReactNode;
  buttons: {
    position: { top: number | string; left: number | string };
    size: { width: number | string; height: number | string };
    onClick?: (dispatch: AppDispatch) => void;
  }[];
}

const gameTasks: { [taskId: string]: TaskData } = {
  1: task1data,
  2: task2data
};
export default gameTasks;
export const POINTS_WRONG_ANSWER=-30;
