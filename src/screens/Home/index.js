import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";

import {startApp} from "../../store/app/actions";
import {startOrder} from "../../store/order/actions";
import {selectBalance} from "../../store/app/selectors";
import BalanceCard from "../../Components/BalanceCard";
import {withStyles} from "@material-ui/core";
import Fab from "@material-ui/core/Fab/Fab";

const styles = (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100vh',
        // background: 'rgb(140,54,251)',
        background: 'linear-gradient(155deg, rgba(140,54,251,1) 0%, rgba(93,52,254,1) 59%, rgba(22,51,253,1) 100%)'
    },
    balance: {
        // marginRight: theme.spacing.unit * 5
    },
    fab: {
        // position: 'absolute',
        height: 75,
        width: 75,
        // display: 'inline-block'
        // bottom: theme.spacing.unit * 2,
        // right: theme.spacing.unit * 2,
    },
})

class HomeScreen extends React.Component {
    componentWillMount() {
        this.props.dispatch(startApp());
    }
    render() {
        const {balance, classes} = this.props;

        if(balance === null) {
            return null;
        }

        // TODO: move click handler
        return <div className={classes.root}>
            <BalanceCard className={classes.balance} balance={balance} />
            <Fab className={classes.fab} color="secondary" aria-label="Add" onClick={() => {
                this.props.dispatch(startOrder())
            }}>
                <AddIcon fontSize={"large"} />
            </Fab>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        balance: selectBalance(state),
    }
}

module.exports = withStyles(styles)(connect(mapStateToProps)(HomeScreen));