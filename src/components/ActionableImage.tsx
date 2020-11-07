import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
  imgContainer: {
    position: 'relative',

    '& > img': {
      width: '100%',
    },

    '& > button': {
      position: 'absolute',

      background: 'transparent',
      border: 'none',
    },
  },
}));

export default function ActionableImage(props: {
  imageUrl: string;
  buttons: {
    position: { top: number | string; left: number | string };
    size: { width: number | string; height: number | string };
    onClick?: (dispatch: AppDispatch) => void;
  }[];
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <div className={classes.imgContainer}>
      <img src={props.imageUrl} alt="Desktop" />
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
            onClick={() => {
              if (b.onClick) {
                b.onClick(dispatch);
              }
            }}
          ></button>
        );
      })}
    </div>
  );
}
