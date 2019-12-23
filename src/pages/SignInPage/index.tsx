import React from 'react';
import { connect } from 'react-redux';
import { signInAction } from 'store/actions';
import SignInPage from './SignInPage';
import { ISignInPayload } from 'store/constants';

export interface SignInProps {
  signIn: (payload: ISignInPayload) => void,
}

function SignIn({ signIn }: SignInProps) {
  return <SignInPage onSubmit={signIn} />;
}

export default connect(
  null,
  { signIn: signInAction }
)(SignIn);
