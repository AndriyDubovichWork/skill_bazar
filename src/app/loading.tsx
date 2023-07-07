import React from 'react';
import classes from './loading.module.scss';
export default function notFound() {
  return (
    <div className={classes.Loading}>
      <span className={classes.Loader} />
    </div>
  );
}
