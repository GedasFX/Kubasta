import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import ActionableImage from '../../components/ActionableImage';
import { AppState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import Buttons from './Buttons';
import { gameActions, GameObject } from '../../store/game';

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

  const [gameObj, setGameObj] = useState(undefined as GameObject | undefined);

  useEffect(() => {
    dispatch(gameActions.setActiveItemId({ id: 1 }));
  }, [dispatch]);

  useEffect(() => {
    setGameObj(
      gameState.activeItemId
        ? gameState.items.entities[gameState.activeItemId]
        : undefined
    );
  }, [gameState.activeItemId, gameState.items]);

  if (!gameObj) {
    return null;
  }

  return (
    <Grid container>
      <Grid item className={classes.imgContainer}>
        <ActionableImage
          imageUrl={gameObj.imageUrl}
          buttons={gameObj.buttons}
        />
      </Grid>
      <Grid item className={classes.btnContainer}>
        <Buttons />
      </Grid>
    </Grid>
  );
}
