import { ActionProps } from 'game-data';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';

export default function AppTextInput(props: {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
  type?: string;
  onChange?: (value: string, props: ActionProps) => void;
}) {
  const dispatch = useDispatch();
  const gameState = useSelector((state: AppState) => state.game);

  return (
    <input
      style={{
        top: props.position.top,
        left: props.position.left,
        width: props.size.width,
        height: props.size.height,
      }}
      type={props.type}
      onChange={(changeEvent) => {
        if (props.onChange) {
          props.onChange(changeEvent.target.value, {
            dispatch,
            state: gameState,
          });
        }
      }}
    ></input>
  );
}
