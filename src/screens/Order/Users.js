import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import {startApp, startOrder} from "../../store/app/actions";


class OrderUsersScreen extends React.Component {
    componentWillMount() {
        // this.props.dispatch(startApp());
    }
    render() {
        return <div>
            <h1>Users</h1>
        </div>
    }
}

module.exports = connect()(OrderUsersScreen);