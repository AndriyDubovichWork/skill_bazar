'use client';

import React, { useState } from 'react';
import classes from './Login.module.scss';
import Input from '../components/Styled/Input/Input';
import PasswordInput from '../components/Styled/PasswordInput/PasswordInput';
import Button from '../components/Styled/Button/Button';

import { Formik } from 'formik';
import { LoginFormT } from './loginTypes';
import registerSchema from '../register/Schema';

import axios from 'axios';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: LoginFormT = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values: LoginFormT, { setSubmitting }) => {
        const { data } = await axios.post<UserT>(
          `http://localhost:3000/api/auth/login?email=${values.email}&password=${values.password}`
        );

        console.log(data);

        setSubmitting(false);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className={classes.Login}>
          <h1 className={classes.Header}>login</h1>

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

          <Button type={'submit'} text='login' disabled={formik.isSubmitting} />
        </form>
      )}
    </Formik>
  );
}
