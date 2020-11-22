import React from 'react';

export default function AppTextInput(props: {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
}) {
  return (
    <input
      style={{
        top: props.position.top,
        left: props.position.left,
        width: props.size.width,
        height: props.size.height,
      }}
    ></input>
  );
}
