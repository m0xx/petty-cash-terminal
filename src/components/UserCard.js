import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import Avatar from "@material-ui/core/Avatar/Avatar";
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    card: {
        padding: 0
    },
    container: {
        padding: theme.spacing.unit,
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        width: 200
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto'
    },
    cover: {
        width: 150
    },
    title: {
    },
    label: {
    },
    avatar: {
        width: 100,
        height: 100,
        margin: '0 auto',
        marginBottom: theme.spacing.unit * 1
    },
});

function UserCard({ classes, image, firstName, lastName, onClick}) {
    const fullName = `${firstName} ${lastName}`;

    return (
        <ButtonBase focusRipple onClick={onClick}>
            <div className={classes.container}>
                <Avatar alt={fullName} src={image} className={classes.avatar} />
                <Typography className={classes.label} variant="body2">
                    {firstName || '-'}
                </Typography>
            </div>
        </ButtonBase>
    );
}

export default withStyles(styles)(UserCard);
