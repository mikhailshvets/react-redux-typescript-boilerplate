import React from 'react'
import FormControlLabel, { FormControlLabelProps } from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Field, FormikProps } from 'formik'
import { isEmpty, get, isNil } from 'lodash'

export interface FormikCheckBoxFieldProps extends FormControlLabelProps {
  name: string,
  label: string,
  shouldSave: (event: React.ChangeEvent<{}>, checked: boolean) => boolean,
}

export const getCheckBoxFieldProps = ({ shouldSave, ...props }: FormikCheckBoxFieldProps, formikFieldProps: FormControlLabelProps, formikForm: FormikProps<{}>) => {
  const { name } = props
  const fieldError = get(formikForm.errors, name)
  const showError = get(formikForm.touched, name) === true && !isEmpty(fieldError) ? fieldError : undefined;
  const control = props.control || (<Checkbox value="allowExtraEmails" color="primary" />)

  const checkboxFieldProps = {
    ...props,
    ...formikFieldProps,
    control,
    value: isNil(formikFieldProps.value) ? '' : formikFieldProps.value,
    id: props.id || props.name,
    error: showError,
    disabled: formikForm.isSubmitting || props.disabled,
    onChange(event: React.ChangeEvent<{}>, checked: boolean) {
      if (shouldSave!(event, checked) && formikFieldProps.onChange) {
        formikFieldProps.onChange(event, checked)
      }

      if (props.onChange) {
        props.onChange(event, checked);
      }
    }
  }

  return checkboxFieldProps
}

const FormikCheckBoxField = (props: FormikCheckBoxFieldProps) => (
  <Field name={props.name}>
    {({ field, form }: {  field: FormControlLabelProps, form: FormikProps<{}> }) => (
      <FormControlLabel {...getCheckBoxFieldProps(props, field, form)} />
    )}
  </Field>
);

FormikCheckBoxField.defaultProps = {
  shouldSave: (e, checked) => true
} as FormikCheckBoxFieldProps;

export default FormikCheckBoxField
