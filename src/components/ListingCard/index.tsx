import React, { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'; 

interface someProps {
    
}
export interface SomeImages {
    thumbnail?: string;
    image?: string;
}
export interface ListingInformation {
    id?: string;
    version?: string;
    creatingDate?: string;
    listingDate?: string;
    listingType?: string;
    listingFormat?: string;
    allowOfferPrice?: boolean;
    allowBuyerSuggestedEscrow?: boolean;
    acceptableEscrows?: [string, string, string];
    price?: number;
    images: SomeImages[];
    //passedImage?: string;
    description?: string;
    sellerName?: string;
}

const useStyles = makeStyles({
    root: {
        paddingTop: 30,
        paddingBottom: 30,
        //boxShadow: '0px 0px 0px 1px',
    },
    image: {
        maxwidth: 150,
        height: '10em',
        //textAlign: 'center',
    },
    scrollingwrapper: {
        //display: 'flex',
        //flexWrap: 'nowrap',
        //overflowX: 'auto',
    },
    scrollitem: {
        //flex:  '0 0 auto',
        //backgroundColor: '#fafafa',
    },
    card: {
        backgroundColor: '#fafafa',
        //color: theme.pallette.primary.contrastText,
        //boxShadow: "none",
        //padding: '0px',
    },
    smallheading: {
        //textAlign: 'left',
        //margin: '4px 20px',
    },
    fontSize: {
        fontSize: '0.6rem',
        textAlign: 'left',
        marginLeft: '5px'
    },
    fontTest: {
        fontSize: '0.5rem',
        textAlign: 'left',
        marginLeft: '5px',
        fontWeight: 'lighter'
    },
    alignText: {
        fontSize: '0.7rem',
        textAlign: 'left',
        marginLeft: '5px'
    }
});

const ListingCard: FC<ListingInformation> = ({id, price, images, description, sellerName}) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.scrollitem} xs={3} sm={3} md={2} lg={2} xl={2}>
                <CardActionArea onClick={() => {alert('clicked')}}>
                    <Card className={classes.card}>
                        <CardContent>    
                            <CardMedia image={images[0].image} className={classes.image} />
                            <Typography className={classes.fontSize}>
                                {description}  
                            </Typography>
                            <Typography className={classes.fontTest}>
                                {sellerName}  
                            </Typography>
                            <Typography className={classes.alignText}>
                                ${price}
                            </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
        </Grid>
    )
}

export default ListingCard;

/*
const useStyles = makeStyles({
    root: {
        paddingTop: 30,
        paddingBottom: 30,
        //boxShadow: '0px 0px 0px 1px',
    },
    image: {
        maxwidth: 150,
        height: '10em',
        //textAlign: 'center',
    },
    scrollingwrapper: {
        //display: 'flex',
        //flexWrap: 'nowrap',
        //overflowX: 'auto',
    },
    scrollitem: {
        //flex:  '0 0 auto',
        backgroundColor: '#fafafa',
    },
    card: {
        backgroundColor: '#fafafa',
        //color: theme.pallette.primary.contrastText,
        boxShadow: "none",
        padding: '0px',
    },
    smallheading: {
        textAlign: 'left',
        margin: '4px 20px',
    }
});
*/