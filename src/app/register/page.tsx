'use client';

import React, { useState } from 'react';

import Input from '../components/Styled/Input/Input';
import Button from '../components/Styled/Button/Button';

import classes from './Register.module.scss';
import PasswordInput from '../components/Styled/PasswordInput/PasswordInput';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className={classes.Register}>
      <h1 className={classes.Header}>register</h1>

      <Input type='email' placeholder='email' />
      <PasswordInput
        placeholder='enter password'
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <PasswordInput
        placeholder='repeat password'
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <Button type={'button'} value='register' />
    </form>
  );
}
