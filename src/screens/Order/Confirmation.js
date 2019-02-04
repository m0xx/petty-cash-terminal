import React from 'react';
import { connect } from 'react-redux';

import {getSelectedProduct, getSelectedUserId, isLoading} from "../../store/order/selectors";
import {cashierCreditProduct} from "../../store/order/actions";
import Navbar from "../../Components/Navbar";
import {showScreen} from "../../store/app/actions";
import {Screens} from "../../constants";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";


class OrderProductsScreen extends React.Component {
    render() {
        const {
            userId,
            product,
            loading
        } = this.props;

        return <div>
            <Navbar title="Confirmation" onNavigateBack={() => {
                this.props.dispatch(showScreen(Screens.ORDER_PRODUCT))
            }} />
            <div>
                <Typography variant="h5">
                    { product.name }
                </Typography>
                <Typography color="textSecondary">
                    { product.description }
                </Typography>
            </div>
            <Button variant="contained" color="primary" onClick={() => {
                this.props.dispatch(cashierCreditProduct({
                    userId,
                    productId: product.id,
                    quantity: 1
                }))
            }} disabled={loading}>Confirmer!</Button>
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