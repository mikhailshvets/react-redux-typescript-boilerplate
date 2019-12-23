import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Form } from 'formik';
import { ISignInPayload } from 'store/constants';

import FormProvider from './FormProvider';
import { SubmitButton } from 'components/Buttons';
import { EmailField, PasswordField } from 'components/FormInputs';

import useStyles from 'constants/styles';

export interface SignInPageProps {
  onSubmit: (payload: ISignInPayload) => void,
}

function SignIn({ onSubmit }: SignInPageProps) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormProvider onSubmit={onSubmit}>
          <Form className={classes.form}>
            <EmailField autoFocus />
            <PasswordField />
            <SubmitButton className={classes.submit}>Sign In</SubmitButton>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {'Don\'t have an account? Sign Up'}
                </Link>
              </Grid>
            </Grid>
          </Form>
        </FormProvider>
      </div>
    </Container>
  );
}

export default SignIn;
