import React from 'react';
import { connect } from 'react-redux';

import {Screens} from "./constants";
import {selectScreenName} from "./store/app/selectors";
import HomeScreen from './screens/Home';
import {Users, Products, Confirmation, Completed} from './screens/Order';
import {withStyles} from "@material-ui/core";

const styles = (theme) => ({
    root: {
        backgroundColor: '#FFF'
    }
})

function renderScreen(screen) {
    switch(screen) {
        case Screens.HOME:
            return <HomeScreen />
        case Screens.ORDER_USER:
            return <Users />
        case Screens.ORDER_PRODUCT:
            return <Products />
        case Screens.ORDER_CONFIRMATION:
            return <Confirmation />
        case Screens.ORDER_COMPLETED:
            return <Completed />
    }

    return `Invalid screen: ${screen}`;
}

function App({screen, classes}) {
    return <div className={classes.root}>
        { renderScreen(screen) }
    </div>
}

const mapStateToProps = (state) => {
    return {
        screen: selectScreenName(state)
    }
}

module.exports = withStyles(styles)(connect(mapStateToProps)(App));