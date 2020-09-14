import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import MuiThemeProvider, {
  ThemeProviderProps,
} from '@material-ui/styles/ThemeProvider';
import { History, LocationState } from 'history';
import reduxStore from 'store';
import { Persistor } from 'redux-persist';

export interface AppProviderProps extends ThemeProviderProps {
  store: typeof reduxStore;
  persistor: Persistor;
  history: History<LocationState>;
}

const AppProvider: React.FC<AppProviderProps> = ({
  children,
  theme,
  store,
  persistor,
  history,
}) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
);

export default AppProvider;
