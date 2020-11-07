import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'game',
  initialState: {} as {
    activeItemId?: string | number;
  },
  reducers: {
    setActiveItemId: (
      state,
      { payload }: PayloadAction<{ id?: string | number }>
    ) => {
      state.activeItemId = payload.id;
    },
  },
});

export default slice.reducer;
export const gameActions = slice.actions;
