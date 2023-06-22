import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Input from '../Input/Input';
import classes from './PasswordInput.module.scss';
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error: string | undefined;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PasswordInput({
  error,
  showPassword,
  setShowPassword,
  ...props
}: Props) {
  return (
    <div className={classes.PasswordContainer}>
      <Input
        error={error}
        {...props}
        type={showPassword ? 'text' : 'password'}
      />
      {showPassword ? (
        <FaEyeSlash
          className={classes.EyeIcon}
          onClick={() => setShowPassword(!showPassword)}
        />
      ) : (
        <FaEye
          className={classes.EyeIcon}
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
}
