import React from 'react';
import Auth from './components/pages/auth';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

const AuthHoc = (WrappedComponent) => {
  const Wrapper = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

    const setAuth = () => setIsLoggedIn((prev) => !prev);

    let component = <WrappedComponent />;

    if (!isLoggedIn) component = <Auth {...{setAuth}} />;

    return (
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <MuiThemeProvider theme={theme}>{component} </MuiThemeProvider>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  };

  return Wrapper;
};

export default AuthHoc;
