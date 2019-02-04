import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import {startApp, startOrder} from "../../store/actions";


class HomeScreen extends React.Component {
    componentWillMount() {
        this.props.dispatch(startApp());
    }
    render() {
        return <div>
            <h1>Home yep ok</h1>
            <Button onClick={() => {
                this.props.dispatch(startOrder())
            }}>Start Order</Button>
        </div>
    }
}

module.exports = connect()(HomeScreen);