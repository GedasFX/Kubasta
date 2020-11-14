import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';

import game from './game';

export const rootReducer = combineReducers({
  game,
});
export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;

export default store;
