'use client';

import React, { useState } from 'react';

import Input from '../components/Styled/Input/Input';
import Button from '../components/Styled/Button/Button';

import classes from './Register.module.scss';
import PasswordInput from '../components/Styled/PasswordInput/PasswordInput';
import { Formik } from 'formik';
import { RegisterFormT } from './registerTypes';
import registerSchema from './Schema';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: RegisterFormT = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values: RegisterFormT, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={classes.Register}>
          <h1 className={classes.Header}>register</h1>

          <Input
            type='email'
            placeholder='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <PasswordInput
            placeholder='enter password'
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <PasswordInput
            placeholder='repeat password'
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            name='passwordConfirm'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirm}
          />

          <Button type={'submit'} text='register' disabled={isSubmitting} />
        </form>
      )}
    </Formik>
  );
}
