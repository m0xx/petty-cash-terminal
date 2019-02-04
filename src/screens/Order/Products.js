import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import {showScreen, startApp, startOrder} from "../../store/app/actions";
import {selectProducts} from "../../store/app/selectors";
import {selectProduct, selectUser} from "../../store/order/actions";
import ProductList from "../../Components/ProductList";
import Navbar from "../../Components/Navbar";
import {Screens} from "../../constants";


class OrderProductsScreen extends React.Component {
    render() {
        const { products } = this.props;

        return <div>
            <Navbar title="Choisir produit" onNavigateBack={() => {
                this.props.dispatch(showScreen(Screens.ORDER_USER))
            }} />
            <ProductList products={products} onSelect={(id) => {
                this.props.dispatch(selectProduct(id))
            }} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        products: selectProducts(state)
    }
}

module.exports = connect(mapStateToProps)(OrderProductsScreen);