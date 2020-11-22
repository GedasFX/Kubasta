import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'game',
  initialState: {} as {
    activeTaskId?: string | number;
    activeScreenId?: string | number;
    showFeedbackDialog?: boolean;
    points:number;
    feedbackText:string;
  },
  reducers: {
    setActiveTaskId: (
      state,
      { payload }: PayloadAction<{ id?: string | number }>
    ) => {
      state.activeTaskId = payload.id;
    },
    setActiveScreenId: (
      state,
      { payload }: PayloadAction<{ id?: string | number }>
    ) => {
      state.activeScreenId = payload.id;
    },
    toggleFeedbackDialog: (
        state,

    ) => {
      state.showFeedbackDialog = !state.showFeedbackDialog;
    },
    setFeedbackDialogText: (
        state,
        {payload}: PayloadAction<{text:string}>
    ) => {
      state.feedbackText = payload.text;
    },
    updatePoints: (
        state,
        {payload}: PayloadAction<{points:number}>
    ) => {
      console.log('state points: ' + state.points)
      state.points = state.points + payload.points;
    },
    initializePoints:(
        state,
    ) => {
      state.points = 150;
    },
  },
});

export default slice.reducer;
export const gameActions = slice.actions;