import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'game',
  initialState: {} as {
    activeTaskId?: string | number;
    activeScreenId?: string | number;
    showFeedbackDialog: boolean;
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
  },
});

export default slice.reducer;
export const gameActions = slice.actions;
