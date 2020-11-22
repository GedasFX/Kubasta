import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AppDispatch, AppState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {gameActions} from "../store/game";

const DialogTitle = (props: {
  text:string;
  onConfirmation?: (dispatch: AppDispatch) => void;
}) => {
  return (
      <MuiDialogTitle disableTypography className="MuiTypography-root MuiTypography-h6" >
        <Typography variant="h6">{props.text}</Typography>
      </MuiDialogTitle>
  );
};

export default function FeedbackDialog() {
  const dispatch = useDispatch();
  const gameState = useSelector((state: AppState) => state.game);
  const onConfirmation = function() {
      dispatch(gameActions.toggleFeedbackDialog())
      dispatch(gameActions.setActiveTaskId({id: 2}));
      dispatch(gameActions.setActiveScreenId({id: 'antiviruspopup'}));

  }
  return (
    <div>
      <Dialog open={gameState.showFeedbackDialog ? gameState.showFeedbackDialog : false}>
        <DialogTitle text={gameState.feedbackText}></DialogTitle>
          <DialogActions>
              <Button autoFocus onClick={onConfirmation} color="primary">
                 Go to next task
              </Button>
          </DialogActions>
      </Dialog>

    </div>
  );
}