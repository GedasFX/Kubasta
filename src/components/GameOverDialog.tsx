import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { AppState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../store/game';
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const getLoseText = () => {
  return 'It appears you were unable to survive in the internet. Not to worry, every failure brings new experience. Now, do you want to try again? I am sure you can do better.';
};

const getWinText = (points: number) => {
  return `Congratulations! You have managed to survive until the end of the game. You have started this journey with 150 points and ended up leaving with ${points}. If you think you can do better, feel free to try again!`;
};

export default function GameOverDialog() {
  const gameState = useSelector((state: AppState) => state.game);
  const dispatch = useDispatch();

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setShowDialog(
      gameState.activeTaskId === '0' &&
        gameState.activeScreenId === 'gameover' &&
        gameState.gameOver
    );
  }, [gameState.activeScreenId, gameState.activeTaskId, gameState.gameOver]);

  const onConfirmation = function () {
    dispatch(gameActions.gameOver(false));
    dispatch(gameActions.setActiveScreenId({ id: 'welcome' }));
    dispatch(gameActions.resetPoints());
  };

  return (
    <div>
      <Dialog open={showDialog}>
        <DialogTitle>Game Over!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {gameState.points > 0
              ? getWinText(gameState.points)
              : getLoseText()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onConfirmation}>
            {gameState.feedbackButtonText ?? 'Try again'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
