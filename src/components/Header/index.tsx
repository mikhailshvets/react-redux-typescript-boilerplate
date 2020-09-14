import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import LinkButton from 'components/Buttons/LinkButton';
import { isLoggedIn } from 'utils/user';
import { User } from 'store/reducers/auth';
import { SIGN_IN, SIGN_UP, HOME, PROTECTED } from 'constants/routes';

export const HEADER_HEIGHT = 64;

export interface HeaderProps {
  user: User;
  signOut: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: 'space-between',
  },
}));

function Header({ user, signOut }: HeaderProps) {
  const classes = useStyles();
  const userIsLoggedIn = isLoggedIn(user);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div>
            <LinkButton to={HOME}>Home</LinkButton>
            {userIsLoggedIn ? (
              <LinkButton to={PROTECTED}>Protected</LinkButton>
            ) : null}
          </div>
          {!userIsLoggedIn ? (
            <div>
              <LinkButton to={SIGN_IN}>Sign In</LinkButton>
              <LinkButton to={SIGN_UP}>Sign Up</LinkButton>
            </div>
          ) : (
            <LinkButton to="" onClick={signOut}>
              Sign Out
            </LinkButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
