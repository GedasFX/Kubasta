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

// For debug, while creating tasks.
let prevClick = { x: 0, y: 0 };

export default function ActionableImage(props: {
  component: React.ReactNode;
  buttons: {
    position: { top: number | string; left: number | string };
    size: { width: number | string; height: number | string };
    onClick?: (dispatch: AppDispatch) => void;
  }[];
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleContainerClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    var rect = (e.target as HTMLElement).getBoundingClientRect();
    const pos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    const posPercentage = {
      x: pos.x / rect.width,
      y: pos.y / rect.height,
    };

    const posPercentageOffset = {
      x: prevClick.x - posPercentage.x,
      y: prevClick.y - posPercentage.y,
    };

    prevClick = posPercentage;

    console.info('Clicked on:', pos, posPercentage, posPercentageOffset);
  };

  return (
    <div className={classes.imgContainer} onClick={handleContainerClick}>
      {props.component}
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
