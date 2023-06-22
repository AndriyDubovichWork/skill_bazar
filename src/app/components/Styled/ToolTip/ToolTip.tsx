import React from 'react';
import classes from './ToolTip.module.scss';

export default function ToolTip({
  children,
  errorText,
}: {
  children: JSX.Element;
  errorText: string | undefined;
}) {
  if (errorText) {
    return (
      <div className={classes.ToolTip}>
        {children}
        <span className={classes.Text}>{errorText}</span>
      </div>
    );
  } else {
    return children;
  }
}
