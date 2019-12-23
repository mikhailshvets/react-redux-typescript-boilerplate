import React from 'react';
import FormikTextField, { FormikTextFieldProps } from './FormikTextField';
import CheckBoxField from './FormikCheckBoxField';

const FormField = (props: Partial<FormikTextFieldProps>) => (
  <FormikTextField variant='standard' margin="normal" fullWidth {...props} />
);

const EmailField = (props: Partial<FormikTextFieldProps>) => (
  <FormField
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    {...props}
  />
);

const PasswordField = (props: Partial<FormikTextFieldProps>) => (
  <FormField
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    {...props}
  />
);

export { FormField, EmailField, PasswordField, CheckBoxField };
