import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const firstScreenId = 'desktopnetworknotconnected';
const firstTaskId = 1;

const slice = createSlice({
  name: 'game',
  initialState: {
    points: 150,

    activeTaskId: firstTaskId,
    activeScreenId: firstScreenId,

    showFeedbackDialog: false,
    feedbackText: '',
  } as {
    activeTaskId: string | number;
    activeScreenId: string | number;

    points: number;

    showFeedbackDialog: boolean;
    feedbackText: string;
    nextTaskId: string | number;
    nextScreenId: string | number;

    userInput: string;
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
    // setNextTaskAndScreen: (
    //   state,
    //   { payload }: PayloadAction<{ nextTaskId: number; nextScreenId: string }>
    // ) => {
    //   state.nextTaskId = payload.nextTaskId;
    //   state.nextScreenId = payload.nextScreenId;
    // },
    setUserInput: (
      state,
      { payload }: PayloadAction<{ userInput: string }>
    ) => {
      state.userInput = payload.userInput;
    },
    task3Feedback: (
      state,
      { payload }: PayloadAction<{ twoFactorSelected: boolean }>
    ) => {
      if (payload.twoFactorSelected) {
        state.points += 10;
        state.feedbackText =
          'You did not care to turn on Two-Factor-Verification (2FV)? Attackers will have access to your account in no time.';
      } else {
        state.feedbackText =
          'Good job for turning on Two-Factor-Verification (2FV).';
      }
      if (state.userInput.length >= 12) {
        state.points += 5;
        state.feedbackText += ' Good job for selecting a safe password';
      } else {
        state.points -= 5;
        state.feedbackText +=
          ' You’re making it too easy! The password you chose was too easy to guess and compute. A safe password should have a minimum length of 12.';
      }
      state.nextTaskId = 4;
      state.nextScreenId = 'emails';
      state.showFeedbackDialog = true;
    },
  },
});

export default slice.reducer;
export const gameActions = slice.actions;
