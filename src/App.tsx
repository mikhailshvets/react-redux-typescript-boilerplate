import React, { useEffect, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { testAuthAction, signOutAction } from 'store/actions';
import { User } from 'store/reducers/auth';

import HomePage from 'pages/HomePage';
import ProtectedPage from 'pages/ProtectedPage/Loadable';
import SignInPage from 'pages/SignInPage/Loadable';
import SignUpPage from 'pages/SignUpPage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import ProtectedRoute from 'components/ProtectedRoute';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import BaseStyles from 'components/BaseStyles/BaseStyles';

import './App.css';
import { RootReducer } from './store/reducers';

interface AppProps {
  testAuth: () => void;
  signOut: () => void;
  user: User;
}

function App({ testAuth, signOut, user }: AppProps): ReactElement {
  useEffect(() => {
    testAuth();
  }, [testAuth]);

  return (
    <>
      <BaseStyles />
      <Header user={user} signOut={signOut} />
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/protected" component={ProtectedPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default connect(
  (store: RootReducer) => ({
    user: store.auth.user,
  }),
  { testAuth: testAuthAction, signOut: signOutAction }
)(App);
