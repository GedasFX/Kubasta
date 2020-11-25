import { ActionProps } from 'game-data';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';

export default function AppButton(props: {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
  onClick?: (props: ActionProps) => void;
}) {
  const dispatch = useDispatch();
  const gameState = useSelector((state: AppState) => state.game);

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
          props.onClick({ dispatch, state: gameState });
        }
      }}
    ></button>
  );
}
