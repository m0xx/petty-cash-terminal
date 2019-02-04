import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";

const styles = {
    userTitle: {
        marginTop: '1rem',
    },
    avatar: {
        width: 100,
        height: 100,
    },
};

function UserList({classes, users, onSelect}) {
    return  <Grid container justify="center" alignItems="center">
        {users.map((user) => {
            const fullName = `${user.first_name}`;
            return <div onClick={() => {
                onSelect(user.id);
            }}>
                <Avatar alt={fullName} src={user.picture.medium} className={classes.avatar} />
                <Typography className={classes.userTitle} variant="title" align="center">
                    { fullName }
                </Typography>
            </div>
        })}
    </Grid>
}

export default withStyles(styles)(UserList);