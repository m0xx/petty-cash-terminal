import React from 'react';
import { connect } from 'react-redux';

import {
    isOrderSuccess
} from "../../store/order/selectors";
import {cashierCreditProduct} from "../../store/order/actions";


class CompletedScreen extends React.Component {
    render() {
        return <div>
            <h1>Completed</h1>
            {this.props.success.toString()}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        success: isOrderSuccess(state),
    }
}

module.exports = connect(mapStateToProps)(CompletedScreen);