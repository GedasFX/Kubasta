import { AppDispatch } from '../store';
import task1data from './task1';
import task2data from './task2';
import task3data from './task3';

export interface TaskData {
  title: string;
  setting?: string;
  instructions?: string;
  description: string;
  screens: { [key: string]: ScreenData };
}

export type ScreenElement<T> = {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
} & T;

export interface ScreenData {
  component: React.ReactNode;
  buttons?: ScreenElement<{
    onClick?: (dispatch: AppDispatch) => void;
  }>[];
  textFields?: ScreenElement<{
    placeholder?: string;
    type?: string;
  }>[];
}

const gameTasks: { [taskId: string]: TaskData } = {
  1: task1data,
  2: task2data,
  3: task3data
};
export default gameTasks;
export const POINTS_WRONG_ANSWER = -30;
