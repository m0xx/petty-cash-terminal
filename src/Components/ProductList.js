import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import CardContent from "@material-ui/core/CardContent/CardContent";

const styles = {
    card: {
        margin: '1rem',
        padding: '1rem',

    },
};


function ProductList({classes, products, onSelect}) {
    return  <div>
        {products.map(({id, name, description, price}) => {
            return <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5">
                        { name }
                    </Typography>
                    <Typography color="textSecondary">
                        { description }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" color="primary" onClick={() => {
                        onSelect(id)
                    }}>Sélectionner</Button>
                </CardActions>
            </Card>
        })}
    </div>
}

export default withStyles(styles)(ProductList);