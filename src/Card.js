import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IMG from './MZ.png';

const styles = {
    card:{
        maxWidth : 200,
    },
    media: {
        height: 30,
    },
};

function MediaCard(props){
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image= { IMG }
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Zukerberg
                    </Typography>
                    <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
        </Card>
    )
}
MediaCard.propType = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);