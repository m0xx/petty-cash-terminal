import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from "@material-ui/icons/ArrowBack";
import {withStyles} from "@material-ui/core";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Navbar({classes, title, onNavigateBack}) {
    return <AppBar position="static">
        <Toolbar>
            <IconButton className={classes.menuButton} onClick={onNavigateBack}  color="inherit" aria-label="Back">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                { title }
            </Typography>
        </Toolbar>
    </AppBar>
}

export default withStyles(styles)(Navbar);