import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'game',
  initialState: {} as {
    activeTaskId?: string | number;
    activeScreenId?: string | number;
    showFeedbackDialog?: boolean;
    points:number;
    feedbackText:string;
    nextTaskId:number;
    nextScreenId:string;
    userInput:string;
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
    initializeFeedbackDialog:(
      state
    ) => {
      state.showFeedbackDialog = false;
      state.feedbackText = '';
    },
    setNextTaskAndScreen:(
      state,
      {payload}: PayloadAction<{nextTaskId:number, nextScreenId:string}>
    ) => {
      state.nextTaskId=payload.nextTaskId;
      state.nextScreenId=payload.nextScreenId;
    },
    setUserInput:(
      state,
      {payload}: PayloadAction<{userInput:string}>
    ) => {
      state.userInput = payload.userInput;
    },
    task3Feedback:(
      state,
      {payload}: PayloadAction<{twoFactorSelected:boolean}>
    ) => {
      if (payload.twoFactorSelected) {
        state.points += 10;
        state.feedbackText = "You did not care to turn on Two-Factor-Verification (2FV)? Attackers will have access to your account in no time.";
      } else {
        state.feedbackText = "Good job for turning on Two-Factor-Verification (2FV).";
      }
      if (state.userInput.length >= 12) {
        state.points += 5;
        state.feedbackText += " Good job for selecting a safe password";
      } else {
        state.points -= 5;
        state.feedbackText += " You’re making it too easy! The password you chose was too easy to guess and compute. A safe password should have a minimum length of 12.";
      }
      state.nextTaskId = 5;
      state.nextScreenId = 'emails';
      state.showFeedbackDialog = true;
    }
  },
});


export default slice.reducer;
export const gameActions = slice.actions;