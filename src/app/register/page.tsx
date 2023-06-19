'use client';

import React, { useState } from 'react';

import Input from '../components/Styled/Input/Input';
import Button from '../components/Styled/Button/Button';

import classes from './Register.module.scss';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={classes.Register}>
      <h1 className={classes.Header}>register</h1>
      <Input type='email' />
      <div className={classes.PasswordContainer}>
        <Input type={showPassword ? 'text' : 'password'} />
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
      <Button type={'button'} value='register' />
    </div>
  );
}
