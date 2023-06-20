import React from 'react';
import classes from './Button.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export default function Button({ text, ...props }: Props) {
  return (
    <button {...props} className={classes.Button}>
      {text}
    </button>
  );
}
