import React from 'react';
import { connect } from 'react-redux';

import {Screens} from "./constants";
import {selectScreenName} from "./store/selectors";
import HomeScreen from './screens/Home';
import OrderUsersScreen from './screens/Order/Users';

function App({screen}) {
    switch(screen) {
        case Screens.HOME:
            return <HomeScreen />
        case Screens.ORDER_USER:
            return <OrderUsersScreen />
    }

    return `Invalid screen: ${screen}: ${screen === Screens.ORDER_USER}`;
}

const mapStateToProps = (state) => {
    return {
        screen: selectScreenName(state)
    }
}

module.exports = connect(mapStateToProps)(App);