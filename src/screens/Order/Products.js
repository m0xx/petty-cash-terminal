import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import {startApp, startOrder} from "../../store/app/actions";
import {selectProducts} from "../../store/app/selectors";
import {selectProduct, selectUser} from "../../store/order/actions";


class OrderProductsScreen extends React.Component {
    render() {
        return <div>
            <h1>Products</h1>
            {this.props.products.map(({id, name}) => {
                return <div key={id} onClick={() => {
                    this.props.dispatch(selectProduct(id))
                }}>{ name }: {id}</div>
            })}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        products: selectProducts(state)
    }
}

module.exports = connect(mapStateToProps)(OrderProductsScreen);