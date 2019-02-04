import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux'
import App from './App';

import theme from './theme';
import createStore from './createStore';

const store = createStore();

const Root = () => {
    return <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
};

ReactDOM.render(<Root />, document.getElementById("app"));