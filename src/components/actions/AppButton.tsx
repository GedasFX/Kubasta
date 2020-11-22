import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';

export default function AppButton(props: {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
  onClick?: (dispatch: AppDispatch) => void;
}) {
  const dispatch = useDispatch();

  return (
    <button
      style={{
        top: props.position.top,
        left: props.position.left,
        width: props.size.width,
        height: props.size.height,
      }}
      onClick={() => {
        if (props.onClick) {
          props.onClick(dispatch);
        }
      }}
    ></button>
  );
}
