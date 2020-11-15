import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import ActionableImage from '../../components/ActionableImage';
import { AppState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import Buttons from './Buttons';
import { gameActions } from '../../store/game';
import gameItems, { ScreenData } from '../../game-data';
import FeedbackDialog from "../../components/FeedbackDialog";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    margin: theme.spacing(8, 0, 3),
  },
  btnContainer: {
    margin: theme.spacing(0),
  },
}));

export default function QuizGame() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const gameState = useSelector((state: AppState) => state.game);

  const [screenData, setScreenData] = useState(undefined as ScreenData | undefined);

  useEffect(() => {
    dispatch(gameActions.setActiveTaskId({ id: 1 }));
    dispatch(gameActions.setActiveScreenId({ id: 'desktopnetworknotconnected' }));
  }, [dispatch]);

  useEffect(() => {
    setScreenData(
      gameState.activeTaskId && gameState.activeScreenId
        ? gameItems[gameState.activeTaskId].screens[gameState.activeScreenId]
        : undefined
    );
  }, [gameState.activeTaskId, gameState.activeScreenId]);

  if (!screenData) {
    return null;
  }

  return (
    <Grid container>
      <Grid item className={classes.imgContainer}>
        <ActionableImage
          component={screenData.component}
          buttons={screenData.buttons}
        />
        <FeedbackDialog></FeedbackDialog>
      </Grid>
    </Grid>
  );
}
