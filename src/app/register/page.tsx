'use client';

import React, { useState } from 'react';

import Input from '../components/Styled/Input/Input';
import Button from '../components/Styled/Button/Button';

import classes from './Register.module.scss';
import PasswordInput from '../components/Styled/PasswordInput/PasswordInput';
import { Formik } from 'formik';
import { RegisterFormT } from './registerTypes';
import registerSchema from './Schema';
import ToolTip from '../components/Styled/ToolTip/ToolTip';
import axios from 'axios';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: RegisterFormT = {
    email: '',
    password: '',
    passwordConfirm: '',
  };
  if (!initialValues.email) {
    throw new Error('hello');
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values: RegisterFormT, { setSubmitting }) => {
        console.log(values);

        const { data } = await axios.post<UserT>(
          `http://localhost:3000/api/auth/register?email=${values.email}&password=${values.password}&passwordConfirm=${values.passwordConfirm}`
        );

        console.log(data);
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className={classes.Register}>
          <h1 className={classes.Header}>register</h1>

          <Input
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ''
            }
            placeholder='email'
            type='email'
            {...formik.getFieldProps('email')}
          />
          <PasswordInput
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ''
            }
            placeholder='enter password'
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            {...formik.getFieldProps('password')}
          />
          <PasswordInput
            error={
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
                ? formik.errors.passwordConfirm
                : ''
            }
            placeholder='repeat password'
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            {...formik.getFieldProps('passwordConfirm')}
          />

          <Button
            type={'submit'}
            text='register'
            disabled={formik.isSubmitting}
          />
        </form>
      )}
    </Formik>
  );
}
