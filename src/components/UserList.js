import React from 'react';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import UserCard from './UserCard';

const styles = (theme) => ({
    root: {
    }
});

function UserList({classes, users, onSelect}) {
    return  <Grid container justify="flex-start" alignItems="center">
        {users.map((user) => {
            return <UserCard
                onClick={() => {
                    onSelect(user.id);
                }}
                image={user.picture.medium}
                firstName={user.first_name}
                lastName={user.last_name}
            />
        })}
    </Grid>
}

export default withStyles(styles)(UserList);