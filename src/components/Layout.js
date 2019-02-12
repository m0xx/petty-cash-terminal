import React from 'react';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';

const styles = ({ theme }) => ({
    root: {
        display: 'flex',
    },
    fullHeight: {
        height: '100vh'
    }
});

function Layout({ children, classes, className = '', fullWidth = false, fullHeight = false }) {
    return (
        <div
            className={cn(classes.root, className, {
                [classes.fullHeight]: fullHeight
            })}
        >
            {children}
        </div>
    );
}

export default withStyles(styles)(Layout);
