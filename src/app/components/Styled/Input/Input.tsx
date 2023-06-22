import React from 'react';
import classes from './Input.module.scss';
import ToolTip from '../ToolTip/ToolTip';
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error: string | undefined;
}
export default function Input({ error, ...props }: Props) {
  return (
    <ToolTip errorText={error}>
      <input
        {...props}
        className={classes.Input}
        style={error ? { outline: '1px solid red' } : {}}
      />
    </ToolTip>
  );
}
