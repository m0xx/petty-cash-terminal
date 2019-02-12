import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import CardContent from "@material-ui/core/CardContent/CardContent";
import ProductCard from "./ProductCard";
const styles = {
    card: {
        margin: '1rem',
        padding: '1rem',

    },
};


function ProductList({classes, products, onSelect}) {
    return  <div>
        {products.map(({id, name, description, price, quantity}) => {
            return <ProductCard
                key={id}
                name={name}
                price={price}
                quantity={quantity}
                image="http://mathematics-in-europe.eu/wp-content/uploads/2016/02/mug-of-beer.jpg"
                onClick={() => {
                    onSelect(id)
                }}
            />
        })}
    </div>
}

export default withStyles(styles)(ProductList);