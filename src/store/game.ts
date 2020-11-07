import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AppDispatch } from '.';

import entities from '../game-data-store';

const slice = createSlice({
  name: 'category',
  initialState: {
    items: adapter.addMany(adapter.getInitialState(), entities),
  } as {
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
