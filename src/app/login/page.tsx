'use client';

import React, { useState } from 'react';
import classes from './Login.module.scss';
import Input from '../components/Styled/Input/Input';
import PasswordInput from '../components/Styled/PasswordInput/PasswordInput';
import Button from '../components/Styled/Button/Button';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={classes.Login}>
      <h1 className={classes.Header}>login</h1>

      <Input type='email' placeholder='email' />
      <PasswordInput
        placeholder='enter password'
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <Button type={'button'} value='login' />
    </form>
  );
}
