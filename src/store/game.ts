import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'game',
  initialState: {
    points: 150,

    activeTaskId: '0',
    activeScreenId: 'welcome',

    showFeedbackDialog: false,
    feedbackText: '',
    feedbackTitle: '',

    gameOver: false,

    userInput: {},
  } as {
    activeTaskId: string | number;
    activeScreenId: string | number;

    points: number;

    showFeedbackDialog: boolean;
    feedbackText: string;
    feedbackTitle: string;
    feedbackButtonText?: string;
    nextTaskId: string | number;
    nextScreenId: string | number;

    gameOver: boolean;

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
        title: string;
        text: string;
        next?: { taskId?: string | number; screenId?: string | number };
      }>
    ) => {
      state.showFeedbackDialog = true;
      state.feedbackText = payload.text;
      state.feedbackTitle = payload.title;

      state.nextTaskId = payload.next?.taskId ?? state.activeTaskId;
      state.nextScreenId = payload.next?.screenId ?? state.activeScreenId;
    },
    updatePoints: (state, { payload }: PayloadAction<{ points: number }>) => {
      state.points = state.points + payload.points;
    },
    setUserInput: (
      state,
      { payload }: PayloadAction<{ key: string; value: string }>
    ) => {
      state.userInput[payload.key] = payload.value;
    },
    gameOver: (state, { payload }: PayloadAction<boolean | undefined>) => {
      if (typeof payload === 'boolean') {
        state.gameOver = payload;
      } else {
        state.gameOver = true;
      }
    },
  },
});

export default slice.reducer;
export const gameActions = slice.actions;
