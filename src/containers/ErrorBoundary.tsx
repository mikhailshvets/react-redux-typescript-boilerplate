import React from 'react';
import { useTheme } from '@material-ui/styles';
import ErrorPage from 'pages/ErrorPage';
import Button from '@material-ui/core/Button';
import { Theme } from '@material-ui/core';

const ReloadButton = () => (
  <Button
    onClick={() => window.location.reload()}
    variant="contained"
    color="primary"
    style={{ margin: `${useTheme<Theme>().spacing}px auto` }}
  >
    Reload now {useTheme<Theme>().spacing}
    {useTheme<Theme>().spacing.name}
    {console.log(useTheme<Theme>().spacing)}
  </Button>
);

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<any, State> {
  static getDerivedStateFromError = () => ({ hasError: true });

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    if (process.env.NODE_ENV === 'development') {
      return null;
    }

    return (
      <ErrorPage>
        <ReloadButton />
      </ErrorPage>
    );
  }
}

export default ErrorBoundary;
