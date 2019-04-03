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
    },
    labelInventory: {
        marginTop: theme.spacing.unit * 2,
        fontSize: '1rem'
    },
    balanceInventory: {
        fontSize: '2.5rem',
        fontWeight: 400
    },
    wallet: {
        marginLeft: theme.spacing.unit * 3
    }
})

function BalanceCard({classes, balance, className, inventory, wallet}) {
    return (
        <Paper elevation={24} className={classes.root + ' ' + className}>
            <Typography className={classes.label}  variant={"subtitle1"} color={"textSecondary"}>
                Balance
            </Typography>
            <Typography className={classes.balance} variant={"title"}>
                $ { formatMoney(balance) }
            </Typography>
            <div style={{display: 'flex'}}>
                <div>
                    <Typography className={classes.labelInventory}  variant={"subtitle1"} color={"textSecondary"}>
                        Inventory
                    </Typography>
                    <Typography className={classes.balanceInventory} variant={"title"}>
                        $ { formatMoney(inventory) }
                    </Typography>
                </div>
                <div className={classes.wallet}>
                    <Typography className={classes.labelInventory}  variant={"subtitle1"} color={"textSecondary"}>
                        Wallet
                    </Typography>
                    <Typography className={classes.balanceInventory} variant={"title"}>
                        $ { formatMoney(wallet) }
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default withStyles(styles)(BalanceCard);

