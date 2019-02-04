import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import {startApp} from "../../store/app/actions";
import {startOrder} from "../../store/order/actions";
import {selectBalance} from "../../store/app/selectors";


class HomeScreen extends React.Component {
    componentWillMount() {
        this.props.dispatch(startApp());
    }
    render() {
        const {balance} = this.props;

        return <div>
            <h1>Home { balance ? balance.toString() : 'oops'}</h1>
            <Button onClick={() => {
                this.props.dispatch(startOrder())
            }}>Start Order</Button>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        balance: selectBalance(state),
    }
}

module.exports = connect(mapStateToProps)(HomeScreen);