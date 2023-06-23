import React from 'react';
import classes from './not-found.module.scss';
export default function notFound() {
  return (
    <div className={classes.NotFound}>
      <h1>Sorry but this page is not found</h1>
    </div>
  );
}
