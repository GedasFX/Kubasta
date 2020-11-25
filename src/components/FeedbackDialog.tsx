import React, {useEffect, useState} from 'react';
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

export default function FeedbackDialog(
) {
    const gameState = useSelector((state: AppState) => state.game);
  const dispatch = useDispatch();
  const onConfirmation = function() {
      dispatch(gameActions.toggleFeedbackDialog())
      console.log(gameState.nextScreenId);
      console.log(gameState.nextTaskId);
      dispatch(gameActions.setActiveTaskId({id: gameState.nextTaskId}));
      dispatch(gameActions.setActiveScreenId({id: gameState.nextScreenId}));

  }
    const [isOpen, setIsOpen] = useState(false);
    const [dialogText, setDialogText] = useState('');
    useEffect(() => {
        setIsOpen(gameState.showFeedbackDialog ? gameState.showFeedbackDialog: false);
        setDialogText(gameState.feedbackText? gameState.feedbackText: '');
    }, [gameState.showFeedbackDialog, gameState.feedbackText]);
    return (
    <div>
          <Dialog open={isOpen}>
              <DialogTitle text={dialogText}></DialogTitle>
              <DialogActions>
                  <Button autoFocus onClick={onConfirmation} color="primary">
                      Go to next task
                  </Button>
            </DialogActions>
         </Dialog>

    </div>
  );

}
