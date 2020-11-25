import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppDispatch, AppState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../store/game';
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

export default function FeedbackDialog() {
  const gameState = useSelector((state: AppState) => state.game);
  const dispatch = useDispatch();

  const onConfirmation = function () {
    dispatch(gameActions.closeFeedbackDialog());

    dispatch(gameActions.setActiveTaskId({ id: gameState.nextTaskId }));
    dispatch(gameActions.setActiveScreenId({ id: gameState.nextScreenId }));
  };

  return (
    <div>
      <Dialog open={gameState.showFeedbackDialog}>
        <DialogTitle>{gameState.feedbackTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{gameState.feedbackText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onConfirmation}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
