import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from "@material-ui/icons/ArrowBack";
import {withStyles} from "@material-ui/core";

const styles = (theme) => ({
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    menuRoot: {
        width: '1.5em',
        height: '1.5em'
    },
    colorDefault: {
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white
    }

});

function Navbar({classes, title, onNavigateBack}) {
    return <div>
        <Toolbar>
            <IconButton  className={classes.menuButton} onClick={onNavigateBack}  color="inherit" aria-label="Back">
                <MenuIcon classes={{root: classes.menuRoot}} />
            </IconButton>
            <Typography variant="headline" color="inherit" className={classes.grow}>
                { title }
            </Typography>
        </Toolbar>
    </div>
}

export default withStyles(styles)(Navbar);