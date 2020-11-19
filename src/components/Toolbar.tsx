import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import ActionableImage from './ActionableImage';
import { AppState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../store/game';
import gameItems, { ScreenData, TaskData } from 'game-data';

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    margin: theme.spacing(8, 0, 3),
  },
  btnContainer: {
    margin: theme.spacing(0),
  },
}));

export default function ToolbarContent() {
  // const dispatch = useDispatch();
  const gameState = useSelector((state: AppState) => state.game);

  const [taskDescription, setTaskDescription] = useState('');

  // useEffect(() => {
  //   dispatch(gameActions.setActiveItemId({ id: 'First' }));
  // }, [dispatch]);

  const computeTaskDescription = (
    activateTaskId: string | number,
    taskData: TaskData
  ) => {
    const progressIndicator =
        'task ' +
        activateTaskId.toString() + ' of ' + Object.keys(gameItems).length;
    const description = taskData?.description;
    return progressIndicator + ': ' + description;
  };

  useEffect(() => {
    setTaskDescription(
      gameState.activeTaskId && gameState.activeScreenId
        ? computeTaskDescription(
          gameState.activeTaskId,
            gameItems[gameState.activeTaskId]
          )
        : ''
    );
  }, [gameState.activeTaskId, gameState.activeScreenId]);

  if (!taskDescription) {
    return null;
  }

  return <div>{taskDescription}</div>;
}
