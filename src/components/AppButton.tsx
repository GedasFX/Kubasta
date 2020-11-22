import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'absolute',

    background: 'transparent',
    border: 'none',
  },
}));

export default function AppButton(props: {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
  onClick?: (dispatch: AppDispatch) => void;
}) {
  const dispatch = useDispatch();
  const styles = useStyles();

  return (
    <button
      style={{
        top: props.position.top,
        left: props.position.left,
        width: props.size.width,
        height: props.size.height,
      }}
      className={styles.button}
      onClick={() => {
        if (props.onClick) {
          props.onClick(dispatch);
        }
      }}
    ></button>
  );
}
