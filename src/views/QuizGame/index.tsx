import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import ActionableImage from '../../components/ActionableImage';
import { AppState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../store/game';
import gameItems, { ScreenData } from '../../game-data';
import FeedbackDialog from '../../components/FeedbackDialog';
import CustomizedProgressBar from '../../components/ProgressBar';

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    margin: theme.spacing(4),
  },
  btnContainer: {
    margin: theme.spacing(0),
  },
}));

export default function QuizGame() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const gameState = useSelector((state: AppState) => state.game);
  const [screenData, setScreenData] = useState(
    undefined as ScreenData | undefined
  );

  useEffect(() => {
    dispatch(gameActions.setActiveTaskId({ id: 1 }));
    dispatch(
      gameActions.setActiveScreenId({ id: 'desktopnetworknotconnected' })
    );
  }, [dispatch]);

  useEffect(() => {
    setScreenData(
      gameState.activeTaskId && gameState.activeScreenId
        ? gameItems[gameState.activeTaskId]?.screens[gameState.activeScreenId]
        : undefined
    );
  }, [gameState.activeTaskId, gameState.activeScreenId]);

  if (!screenData) {
    return null;
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <CustomizedProgressBar />
      </Grid>
      <Grid item xs={12} className={classes.imgContainer}>
        <ActionableImage {...screenData} />
        <FeedbackDialog />
      </Grid>
    </Grid>
  );
}
