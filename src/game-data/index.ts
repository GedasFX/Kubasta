import { AppDispatch } from '../store';
import task1data from './task1';

export interface TaskData {
  [key: string]: GameObject;
}

export interface GameObject {
  component: React.ReactNode;
  description: string;
  buttons: {
    position: { top: number | string; left: number | string };
    size: { width: number | string; height: number | string };
    onClick?: (dispatch: AppDispatch) => void;
  }[];
}

const gameData: { [taskId: string]: TaskData } = {
  1: task1data,
};
export default gameData;
