import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import cn from 'classnames';
import { formatMoney } from '../utils';

const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 2
    },
    container: {
        display: 'flex'
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto',
        padding: theme.spacing.unit * 2
    },
    cover: {
        width: 150
    },
    price: {
        display: 'inline-block',
        fontWeight: 800
        // color: '#fff',
        // backgroundColor: '#000',
        // padding: '0.5rem 1rem'
    },
    stock: {
        display: 'inline-block',
        marginLeft: theme.spacing.unit * 1.5,
        textDecoration: 'underline',
        color: 'green'
    },
    title: {
        marginBottom: theme.spacing.unit
    },
    outOfStock: {
        color: 'red'
    },
    cardContentRoot: {
        padding: theme.spacing.unit,
        ':last-child': {
            paddingBottom: theme.spacing.unit,
        }
    }
});

function ProductCard({ classes, image, name, price = 0.0, quantity = 0, onClick }) {
    const outOfStock = quantity <= 0;

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={onClick}>
                <div className={classes.container}>
                    <CardMedia className={classes.cover} image={image} title={name} />
                    <div className={classes.details}>
                        <div  className={classes.content}>
                            <Typography className={classes.title} variant="title">
                                {name}
                            </Typography>
                            <Typography className={classes.price} variant="subheading">
                                {formatMoney(price)} $
                            </Typography>
                            <Typography
                                className={cn(classes.stock, {
                                    [classes.outOfStock]: outOfStock
                                })}
                                variant="caption"
                            >
                                {outOfStock ? 'Out of stock' : `${quantity} left in stock`}
                            </Typography>
                        </div>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
}

export default withStyles(styles)(ProductCard);
