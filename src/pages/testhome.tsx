import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { green } from "@material-ui/core/colors";
import React, { FC, useEffect, useState } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import miniMiner from './miniMiner.jpg';
import { getAllJSDocTags, getDefaultLibFilePath } from "typescript";
import Divider from '@material-ui/core/Divider';

import Homepage from '../components/HomePageCard';
import ListingCard from '../components/ListingCard';


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

export interface SomeImages {
    thumbnail?: string;
    image?: string;
}
export interface HomeProps { };
export interface ListingInformation {
    id?: string;
    version?: string;
    creatingDate?: string;
    listingDate?: string;
    listingType?: string;
    listingFormat?: string;
    allowOfferPrice?: boolean;
    allowBuyerSuggestedEscrow?: boolean;
    acceptableEscrows?: string[];
    price?: number;
    images: SomeImages[];
    //passedImage?: string;
    description?: string;
    sellerName?: string;
}

const ItemsTest: FC<ListingInformation> = ({id = 'Default ID', price = '0.99'}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{price}</p>
        </div>
    );
}

//code from https://dev.to/silvestricodes/asynchronous-flows-with-react-hooks-1g0m
const Home: FC<HomeProps> = ({}) => {
    const classes = useStyles();
    const [cardData, setCardData] = useState<Array<ListingInformation>>([{id: "test", 
        images: [
            {   "thumbnail": "http://localhost:3000/images/miniWallet.jpg",
                "image": "http://localhost:3000/images/miniWallet.jpg"
            }
        ]
    }]); 
    const [errorA, setErrorA] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const fetcher = await window.fetch('staticdata/listingformat.json');
            const response = await fetcher.json();
            setCardData(response.data);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return(
        <div>
            {isLoading ? <div>Loading</div> : 
            <div>
                <h4 className={classes.smallheading}>Our picks for you</h4>
                <Grid container spacing={2}>
                    {cardData.map((cdata) => {
                        return(
                            <ListingCard id={cdata.id} 
                                price={cdata.price} 
                                images={cdata.images} 
                                description={cdata.description}
                                sellerName={cdata.sellerName}
                            />
                        );
                    })}
                </Grid>
            </div>
            }   
        </div>
    );
}

export default Home;

/*
(<div>
    {cardData.map( (listing) => {
        <div>hello {listing.id}</div>
    })}</div>)


return(
        <div>
            {isLoading ? <div>Loading</div> : 
            <div>
                 <ItemsTest id={cardData[0].id} price={cardData[0].price}/>
            </div>
            }   
        </div>
    );

    <Grid item>
        <CardActionArea onClick={() => {alert('clicked')}}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography>
                        {cdata.images[0].image}
                        {cdata.price}
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    </Grid>
*/