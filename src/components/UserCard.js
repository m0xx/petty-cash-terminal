import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import cn from 'classnames';
import { formatMoney } from '../utils';
import Avatar from "@material-ui/core/Avatar/Avatar";

const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 2
    },
    container: {
        display: 'flex',
        textAlign: 'center'
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
        marginBottom: theme.spacing.unit * 1.5
    },
});

function UserCard({ classes, image, firstName, lastName, onClick}) {
    const fullName = `${firstName} ${lastName}`;

    return (
        <Card className={classes.card} style={{width: 200}}>
            <CardActionArea onClick={onClick}>
                <div className={classes.container}>
                        <CardContent className={classes.content}>
                            <Avatar alt={fullName} src={image} className={classes.avatar} />
                            <Typography className={classes.label} variant="body2">
                                {firstName || '-'}
                            </Typography>
                            <Typography className={classes.label} variant="body2">
                                {lastName || '-'}
                            </Typography>
                        </CardContent>
                </div>
            </CardActionArea>
        </Card>
    );
}

export default withStyles(styles)(UserCard);
