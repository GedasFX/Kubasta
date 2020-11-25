import { AppDispatch } from '../store';
import gameReducer from 'store/game';

import task1data from './task1';
import task2data from './task2';
import task3data from './task3';
import task4data from './task4';
import task5data from './task5';
import task6data from './task6';
import task7data from './task7';
import task8data from './task8';
import task9data from './task9';
import task10data from './task10';
import task11data from './task11';
import task12data from './task12';
import task13data from './task13';
import task14data from './task14';
import task15data from './task15';
import task19data from './task19';
import task20data from './task20';

export interface TaskData {
  title: string;
  setting?: string;
  instructions?: string;
  description: string;
  screens: { [key: string]: ScreenData };
  buttons?: { text: string; onClick?: (props: ActionProps) => void }[];
}

export type ScreenElement<T> = {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
} & T;

export type ActionProps = {
  dispatch: AppDispatch;
  state: ReturnType<typeof gameReducer>;
};

export interface ScreenData {
  component: React.ReactNode;
  buttons?: ScreenElement<{
    onClick?: (props: ActionProps) => void;
  }>[];
  textFields?: ScreenElement<{
    placeholder?: string;
    type?: string;
    onChange?: (value: string, props: ActionProps) => void;
  }>[];
}

const gameTasks: { [taskId: string]: TaskData } = {
  1: task1data,
  2: task2data,
  3: task3data,
  4: task4data,
  5: task5data,
  6: task6data,
  7: task7data,
  8: task8data,
  9: task9data,
  10: task10data,
  11: task11data,
  12: task12data,
  13: task13data,
  14: task14data,
  15: task15data,
  19: task19data,
  20: task20data,
};
export default gameTasks;
export const POINTS_WRONG_ANSWER = -30;
