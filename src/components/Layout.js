import React from 'react';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    fullHeight: {
        height: '100vh'
    },
    content: {
        paddingLeft: theme.spacing.unit * 5,
        paddingRight: theme.spacing.unit * 5,
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3
    }
});

function Layout({ children, classes, className = '', fullWidth = false, fullHeight = false, navbar = null }) {
    return (
        <div
            className={cn(classes.root, className, {
                [classes.fullHeight]: fullHeight
            })}
        >
            { navbar }
            <div className={classes.content}>
                {children}
            </div>
        </div>
    );
}

export default withStyles(styles)(Layout);
