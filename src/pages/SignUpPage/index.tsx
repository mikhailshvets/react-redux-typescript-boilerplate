import React from 'react';
import { connect } from 'react-redux';
import { signUpAction } from 'store/actions';
import SignUpPage from './SignUpPage';
import { ISignUpPayload } from 'store/constants';

export interface SignUpProps {
  signUp: (payload: ISignUpPayload) => void,
}

function SignUp({ signUp }: SignUpProps) {
  return <SignUpPage onSubmit={signUp} />;
}

export default connect(
  null,
  { signUp: signUpAction }
)(SignUp);
