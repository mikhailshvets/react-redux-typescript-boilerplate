import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { connect, FormikProps } from 'formik'

export interface FormikSubmitButtonProps extends ButtonProps {
  formik?: FormikProps<{}>,
  disabled?: boolean,
};

const FormikSubmitButton = ({ formik, disabled = false, ...props }: FormikSubmitButtonProps) =>  {
  const isDisabled = formik!.isSubmitting || disabled;

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      {...props}
      type="submit"
      disabled={isDisabled}
    />
  )
};

export const SubmitButton = connect(FormikSubmitButton);
export * from './LinkButton'
