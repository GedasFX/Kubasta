import { AppDispatch } from '../store';
import task1data from './task1';

export interface TaskData {
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
};
export default gameTasks;
