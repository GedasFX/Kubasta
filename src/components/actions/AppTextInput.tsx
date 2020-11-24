import React from 'react';
import {useDispatch} from "react-redux";

export default function AppTextInput(props: {
  position: { top: number | string; left: number | string };
  size: { width: number | string; height: number | string };
  type?: string;
  onChange:any;
}) {
    const dispatch = useDispatch();
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
                props.onChange(changeEvent.target.value, dispatch);
            }
      }}
    ></input>
  );
}
