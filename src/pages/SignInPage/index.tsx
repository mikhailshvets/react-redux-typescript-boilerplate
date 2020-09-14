import React from 'react';
import { connect } from 'react-redux';
import { signInAction } from 'store/actions';
import SignInPage from './SignInPage';
import { SignInPayload } from 'store/constants';

export interface SignInProps {
  signIn: (payload: SignInPayload) => void,
}

function SignIn({ signIn }: SignInProps) {
  return <SignInPage onSubmit={signIn} />;
}

export default connect(
  null,
  { signIn: signInAction }
)(SignIn);
