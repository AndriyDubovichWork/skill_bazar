'use client';

import { useEffect } from 'react';
import classes from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={classes.Error}>
      <h2>{error.message ? error.message : 'Something went wrong!'}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
