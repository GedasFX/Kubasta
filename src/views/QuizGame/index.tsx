import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Buttons from './Buttons';

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    margin: theme.spacing(8, 0, 3),
    position: 'relative',

    '& > button': {
      position: 'absolute',

      background: 'transparent',
      border: 'none',
    },
  },
  btnContainer: {
    margin: theme.spacing(0),
  },
  img: {
    width: '100%',
  },
}));

export default function QuizGame(props: {
  imageUrl: string;
  buttons: {
    position: { top: number | string; left: number | string };
    size: { width: number | string; height: number | string };
  }[];
}) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.imgContainer}>
        <img src={props.imageUrl} alt="Desktop" className={classes.img} />
        {props.buttons.map((b, i) => {
          return (
            <button
              key={i}
              style={{
                top: b.position.top,
                left: b.position.left,
                width: b.size.width,
                height: b.size.height,
              }}
            ></button>
          );
        })}
      </Grid>
      <Grid item className={classes.btnContainer}>
        <Buttons />
      </Grid>
    </Grid>
  );
}
