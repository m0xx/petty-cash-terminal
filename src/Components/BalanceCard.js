import React from 'react';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import {formatMoney} from "../utils";

const styles = (theme) => ({
    root: {
        shadow: theme.shadows[10],
        paddingTop: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 6,
        paddingBottom: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 6,
        display: 'inline-block',
        minWidth: 250,
    },
    label: {
        fontSize: '2rem'
    },
    balance: {
        fontSize: '5rem',
        fontWeight: 400
    }
})

function BalanceCard({classes, balance, className}) {
    return (
        <Paper elevation={24} className={classes.root + ' ' + className}>
            <Typography className={classes.label}  variant={"subtitle1"} color={"textSecondary"}>
                Balance
            </Typography>
            <Typography className={classes.balance} variant={"title"}>
                $ { formatMoney(balance) }
            </Typography>
        </Paper>
    )
}

export default withStyles(styles)(BalanceCard);

