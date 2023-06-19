import React from 'react';
import classes from './Button.module.scss';

export default function Button(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input {...props} className={classes.Button} type='button' />;
}
