import React from 'react';
import MuiTextField, { StandardTextFieldProps } from '@material-ui/core/TextField';
import { Field, FormikProps } from 'formik';
import { isEmpty, get, isNil, merge } from 'lodash';

const inputLabelProps = {
  style: { fontSize: '0.96rem' }
};

export interface FormikTextFieldProps extends StandardTextFieldProps {
  name?: string,
  shouldSave: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => boolean,
}

export const getTextFieldProps = ({ shouldSave, ...props }: FormikTextFieldProps, formikFieldProps: StandardTextFieldProps, formikForm: FormikProps<{}>) => {
  const { name, type } = props;
  const fieldError = get(formikForm.errors, name!);
  const showError =
    get(formikForm.touched, name!) === true && !isEmpty(fieldError);

  const inputProps = [ 'email', 'password' ].includes(String(type))
    ? {
      ...props.inputProps,
      spellCheck: false,
      autoCapitalize: 'none',
      autoCorrect: 'off'
    }
    : props.inputProps;

  const InputLabelProps = merge(props.InputLabelProps, inputLabelProps);

  const textFieldProps = {
    ...props,
    ...formikFieldProps,
    inputProps,
    InputLabelProps,
    value: isNil(formikFieldProps.value) ? '' : formikFieldProps.value,
    id: props.id || props.name,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: formikForm.isSubmitting || props.disabled,
    onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      if (shouldSave!(event) && formikFieldProps.onChange) {
        formikFieldProps.onChange(event)
      }

      if (props.onChange) {
        props.onChange(event);
      }
    },
      
  };

  return textFieldProps;
};

const FormikTextField = (props: FormikTextFieldProps) => (
  <Field name={props.name}>
    {({ field, form }: {  field: StandardTextFieldProps, form: FormikProps<{}> }) => (
      <MuiTextField {...getTextFieldProps(props, field, form)} />
    )}
  </Field>
);

FormikTextField.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  shouldSave: () => true
} as FormikTextFieldProps;

export default FormikTextField;
