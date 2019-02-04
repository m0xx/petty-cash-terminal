import React from 'react';
import { connect } from 'react-redux';

import {Screens} from "./constants";
import {selectScreenName} from "./store/app/selectors";
import HomeScreen from './screens/Home';
import {Users, Products, Confirmation, Completed} from './screens/Order';

function App({screen}) {
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

const mapStateToProps = (state) => {
    return {
        screen: selectScreenName(state)
    }
}

module.exports = connect(mapStateToProps)(App);