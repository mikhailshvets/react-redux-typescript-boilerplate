import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps, RouteProps } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Text from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/KeyboardArrowLeft';
import { useTheme, withStyles, createStyles } from '@material-ui/styles';
import { isLoggedIn } from 'utils/user';
import LinkButton from 'components/Buttons/LinkButton';
import { HOME, PROTECTED } from 'constants/routes';
import window from 'global';
import { IUser } from 'store/reducers/auth';
import { History } from 'history';
import { Theme } from '@material-ui/core';

const GoToDashboardButton = () => (
  <LinkButton variant="contained" color="primary" to="/">
    <ArrowBackIcon style={{ marginRight: useTheme<Theme>().spacing[0] }} />
    Go now
  </LinkButton>
);

const styles = () => ({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
});

const WrapperComponent = (props: any) => (<div {...props} />)
const Wrapper = withStyles(createStyles(styles))(WrapperComponent);

interface ErrorMessageProps {
  children: React.ReactNode,
  timeToRetry: number,
};

const ErrorMessage = ({ timeToRetry, children }: ErrorMessageProps) => (
  <Wrapper>
    <Text variant="h1" gutterBottom align="center">
      Oops...
      <br />
      An error has occurred
    </Text>
    <Text variant="h6" gutterBottom align="center">
      Something went wrong, the page could not be found or the web server is
      currently unavailable. Redirecting to home page in {timeToRetry}{' '}
      seconds...
    </Text>

    {children}
  </Wrapper>
);

export interface ErrorPageProps extends React.PropsWithChildren<RouteComponentProps> {
  children: React.ReactNode,
  retryDelayInSeconds?: number,
  user?: IUser
};

const ErrorPage = ({
  retryDelayInSeconds = 15,
  children = <GoToDashboardButton />,
  history,
  location,
  user
}: ErrorPageProps) => {
  const [ timer, setTimer ] = useState<number>(retryDelayInSeconds);

  /** @NOTE: Handle timer */
  useEffect(() => {
    const counter = setInterval(() => setTimer(t => t - 1), 1e3);

    return () => clearInterval(counter);
  }, [ retryDelayInSeconds ]);

  /** @NOTE: Handle timeout */
  useEffect(() => {
    if (timer > 0) {
      return;
    }

    const alreadyInHomePage = [ PROTECTED, HOME ].includes(location.pathname);
    if (alreadyInHomePage) {
      window.location.reload();
    } else {
      history.push(HOME);
    }
  }, [ timer ]);

  if (isLoggedIn(user!)) {
    return (
      <ErrorMessage timeToRetry={timer}>
        <Grid container justify="center">
          {children}
        </Grid>
      </ErrorMessage>
    );
  }

  return (
    <ErrorMessage timeToRetry={timer}>
      <Grid container justify="center">
        {children}
      </Grid>
    </ErrorMessage>
  );
};

ErrorPage.defaultProps = {
  retryDelayInSeconds: 15,
  children: <GoToDashboardButton />
} as ErrorPageProps;

export default withRouter(ErrorPage)
