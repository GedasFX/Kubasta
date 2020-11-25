import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const firstScreenId = 'desktopnetworknotconnected';
const firstTaskId = 1;

const slice = createSlice({
  name: 'game',
  initialState: {
    points: 150,

    activeTaskId: '0',
    activeScreenId: 'welcome',

    showFeedbackDialog: false,
    feedbackText: '',

    userInput: {},
  } as {
    activeTaskId: string | number;
    activeScreenId: string | number;

    points: number;

    showFeedbackDialog: boolean;
    feedbackText: string;
    nextTaskId: string | number;
    nextScreenId: string | number;

    userInput: { [name: string]: string };
  },
  reducers: {
    setActiveTaskId: (
      state,
      { payload }: PayloadAction<{ id: string | number }>
    ) => {
      state.activeTaskId = payload.id;
    },
    setActiveScreenId: (
      state,
      { payload }: PayloadAction<{ id: string | number }>
    ) => {
      state.activeScreenId = payload.id;
    },
    closeFeedbackDialog: (state) => {
      state.showFeedbackDialog = !state.showFeedbackDialog;
    },
    openFeedbackDialog: (
      state,
      {
        payload,
      }: PayloadAction<{
        text: string;
        next?: { taskId?: string | number; screenId?: string | number };
      }>
    ) => {
      state.showFeedbackDialog = true;
      state.feedbackText = payload.text;

      state.nextTaskId = payload.next?.taskId ?? state.activeTaskId;
      state.nextScreenId = payload.next?.screenId ?? state.activeScreenId;
    },
    updatePoints: (state, { payload }: PayloadAction<{ points: number }>) => {
      state.points = state.points + payload.points;
    },
    gameOver: (state) => {
      state.activeTaskId = firstTaskId;
      state.activeScreenId = firstScreenId;
    },
    setUserInput: (
      state,
      { payload }: PayloadAction<{ key: string; value: string }>
    ) => {
      state.userInput[payload.key] = payload.value;
    },
  },
});

export default slice.reducer;
export const gameActions = slice.actions;
