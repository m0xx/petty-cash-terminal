import React from 'react';
import { connect } from 'react-redux';

import {getSelectedProduct, getSelectedUserId, isLoading} from "../../store/order/selectors";
import {cashierCreditProduct} from "../../store/order/actions";


class OrderProductsScreen extends React.Component {
    render() {
        const {
            userId,
            product,
            loading
        } = this.props;

        return <div>
            <h1>Products</h1>
            {this.props.product.id}
            <div onClick={() => {
                this.props.dispatch(cashierCreditProduct({
                    userId,
                    productId: product.id,
                    quantity: 1
                }))
            }}>Complete</div>
            <div>{loading.toString()}</div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        loading: isLoading(state),
        userId: getSelectedUserId(state),
        product: getSelectedProduct(state)
    }
}

module.exports = connect(mapStateToProps)(OrderProductsScreen);