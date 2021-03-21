import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    root: {
        
    },
    media: {
        height: 0,
        paddingTop: '56.25%',  //16:9
    }
});

export interface someProps {
    image: string,
    title: string,
}

const HomePageCard: FC<someProps> = ({image, title}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
            />
        </Card>
    )
}

export default HomePageCard;

