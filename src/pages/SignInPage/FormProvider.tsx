import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';

const SignInSchema = object().shape({
  email: string()
    .email('Invalid email')
    .required('Required'),
  password: string().required('Required')
});

const INITIAL_SIGN_IN_VALUES = {
  email: '',
  password: '',
  remember: false
};

export interface FormProviderProps extends React.PropsWithChildren<any> {
  onSubmit: (values: any) => void;
}

const FormProvider = ({ children, onSubmit }: FormProviderProps) => {
  const handleSignIn = async (formData, actions) => {
    try {
      onSubmit(formData);
    } catch (error) {
      actions.resetForm();
      actions.setFieldValue('email', formData.email);
    }
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_SIGN_IN_VALUES }}
      validationSchema={SignInSchema}
      onSubmit={handleSignIn}
    >
      {children}
    </Formik>
  );
};

export default FormProvider;
