import { makeStyles } from '@material-ui/core/styles';
import { ScreenData } from 'game-data';
import React from 'react';
import AppButton from './actions/AppButton';
import AppTextInput from './actions/AppTextInput';

const useStyles = makeStyles(() => ({
  imgContainer: {
    position: 'relative',

    '& > img': {
      width: '100%',
    },

    '& > *:not(img)': {
      position: 'absolute',

      background: 'transparent',
      border: 'none',
    },
  },
}));

// For debug, while creating tasks.
let prevClick = { x: 0, y: 0 };

export default function ActionableImage(props: ScreenData) {
  const classes = useStyles();

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
    console.info(
      JSON.stringify({
        position: {
          top: `${(posPercentage.y * 100).toFixed(2)}%`,
          left: `${(posPercentage.x * 100).toFixed(2)}%`,
        },
        size: {
          height: `${(posPercentageOffset.y * 100).toFixed(2)}%`,
          width: `${(posPercentageOffset.x * 100).toFixed(2)}%`,
        },
      })
    );
  };

  return (
    <div className={classes.imgContainer} onClick={handleContainerClick}>
      {props.component}
      {props.buttons?.map((b, i) => (
        <AppButton
          position={b.position}
          size={b.size}
          onClick={b.onClick}
          key={i}
        />
      ))}
      {props.textFields?.map((t, i) => (
        <AppTextInput
          position={t.position}
          size={t.size}
          type={t.type}
          key={i}
          onChange={t.onChange}
        />
      ))}
    </div>
  );
}
