import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './../theme';
import Catalog from "./Catalog";

const Root = () => {
    return <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Catalog />
    </MuiThemeProvider>
};

ReactDOM.render(<Root />, document.getElementById("app"));