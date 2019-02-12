import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import {showScreen, startApp, startOrder} from "../../store/app/actions";
import {selectProducts} from "../../store/app/selectors";
import {selectProduct, selectUser} from "../../store/order/actions";
import ProductList from "../../components/ProductList";
import Navbar from "../../components/Navbar";
import {Screens} from "../../constants";
import Layout from "../../components/Layout";


class OrderProductsScreen extends React.Component {
    render() {
        const { products } = this.props;

        return <Layout
            fullHeight
            navbar={<Navbar title="Choisir produit" onNavigateBack={() => {
                this.props.dispatch(showScreen(Screens.ORDER_USER))
            }} />}
        >
            <ProductList products={products} onSelect={(id) => {
                this.props.dispatch(selectProduct(id))
            }} />
        </Layout>
    }
}

const mapStateToProps = (state) => {
    return {
        products: selectProducts(state)
    }
}

module.exports = connect(mapStateToProps)(OrderProductsScreen);