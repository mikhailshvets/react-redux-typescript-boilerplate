import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { isLoggedIn, userSelector } from 'utils/user';

function ProtectedRoute(props: RouteProps) {
  const user = useSelector(userSelector, shallowEqual);
  const userIsLoggedIn = isLoggedIn(user);

  if (!userIsLoggedIn) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}

export default ProtectedRoute;
