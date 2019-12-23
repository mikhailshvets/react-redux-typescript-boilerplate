import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import MuiThemeProvider, { ThemeProviderProps } from '@material-ui/styles/ThemeProvider';
import * as appTheme from 'theme';
import { History } from 'history';

export interface AppProviderProps extends ThemeProviderProps {
  store: any,
  persistor: any,
  history: History<any>,
}

const AppProvider = ({ children, theme, store, persistor, history }: AppProviderProps) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
);

AppProvider.defaultProps = {
  theme: appTheme.light
};

export default AppProvider;
