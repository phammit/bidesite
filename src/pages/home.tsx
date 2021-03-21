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
    acceptableEscrows?: [string, string, string];
}

const Home: FC<HomeProps> = () => {
    const classes = useStyles();
    const [cardData, setCardData] = useState<Array<ListingInformation>>([{id: "test"}]); 
    const [errorA, setErrorA] = useState(null);
    const [loadingA, setLoadingA] = useState(true);

    const getDataB = () => {
        
        fetch('staticdata/listingformat.json'
        , {
            headers : {
                'content-type' : 'application/json',
                'Accept' : 'application/json'
            }
        }).then(function(response) {
            console.log("response : ", response)
            return response.json();
        }).then(function(myJson) {
            console.log("myJson : ", myJson)
            setCardData(myJson.data);
            console.log("please update cardData : ", cardData);
        });
    }

    //function useData() {
    useEffect(() => {
        //setCardData({"data": [{"id": "1234"}]})
        //fetching static data in public folder
        //const result = getData();
        console.log('cardData should be /"test/" : ', cardData);
        console.log("here is jsonData.........");
        setCardData([{id: "test1"}])
        //console.log("result : ", result);
        console.log('cardData should be /"test1/" : ', cardData);
        //console.log("result is : ", result );
        
        /*
        const getData = async () => {
            const results = await fetch('staticdata/listingformat.json',
                {
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
            //setCardData(results);
            return results;
        }
        getData();
        console.log("cardData after : ", cardData);
        */
       //getNewData();
       getDataB();
       console.log("cardData updated? : ", cardData);
    },[]);
    //}

    /*
    async function getNewData() {
        try {
            const response = await fetch('staticdata/listingformat.json',
            {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    //'Cross-Origin-Embedder-Policy': 'require-corp',//needs to be set on the server
                    //'Cross-Origin-Opener-Policy': 'same-origin'//needs to be set on the server
                }
            });
            console.log("response is : ", response);
            const responseJson = response.json();
            console.log("responseJson is : ", responseJson);
            //setCardData(response)
        } catch (e) {
            setErrorA(e);
        } finally {
            setLoadingA(false);
        }
    }

    const getSomeData = async() => {
        const response = await fetch('staticdata/listingformat.json');
    }

    const getData = async () => {
        await fetch('staticdata/listingformat.json'
        ,{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function(response){
            console.log("fetching......");
            console.log("response : ", response);
            const responseJson = response.json();
            console.log("response.json : ", responseJson);
            return responseJson;
        }).then(function(myJson) {
            console.log("printing our myJson.......");
            console.log("myJson : ", myJson);
            setCardData(myJson);
            console.log("cardData : ", cardData);
            //console.log(cardData.data);
        })
    }
    */

    return(
        <div>
        <div
            className={classes.root}
        >
            <h4 className={classes.smallheading}>Our picks for you</h4>
            <Grid container spacing={1} className={classes.scrollingwrapper}>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}>
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image='/images/digitalWallet.jpg' className={classes.image}/>
                                <Typography>
                                    Homepage
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/miniMiner.jpg" className={classes.image} />
                                <Typography>
                                    Mini Miner
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="/images/bitcoin.jpg" className={classes.image}/>
                                <Typography>
                                    Mini Miner 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="/images/redScooter.jpg" className={classes.image} />
                                <Typography>
                                    Homepage
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}>
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/RTX2080.jpg" className={classes.image} />
                                <Typography>
                                    Mini Miner
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/miniMiner.jpg" className={classes.image}/>
                                <Typography>
                                    Mini Miner 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>

        <Divider />

        <div className={classes.root}>
        <h4 className={classes.smallheading}>Recently viewed</h4>
            <Grid container spacing={1} className={classes.scrollingwrapper}>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}>
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image='images/coolGraphicsCard.jpg' className={classes.image}/>
                                <Typography>
                                    Homepage
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/rig.jpg" className={classes.image} />
                                <Typography>
                                    Mini Miner
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/scateboard.jpg" className={classes.image}/>
                                <Typography>
                                    Mini Miner 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="/images/RTX2080.jpg" className={classes.image} />
                                <Typography>
                                    Homepage
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}>
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/miniWallet.jpg" className={classes.image} />
                                <Typography>
                                    Mini Miner
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/coolGraphicsCard.jpg" className={classes.image}/>
                                <Typography>
                                    Mini Miner 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>

        <Divider />

        <div className={classes.root}>
        <h4 className={classes.smallheading}>Exciting Finds</h4>
            <Grid container spacing={1} className={classes.scrollingwrapper}>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}>
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image='images/coolGraphicsCard.jpg' className={classes.image}/>
                                <Typography>
                                    Homepage
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/rig.jpg" className={classes.image} />
                                <Typography>
                                    Mini Miner
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/scateboard.jpg" className={classes.image}/>
                                <Typography>
                                    Mini Miner 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="/images/RTX2080.jpg" className={classes.image} />
                                <Typography>
                                    Homepage
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}>
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/miniWallet.jpg" className={classes.image} />
                                <Typography>
                                    Mini Miner
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item className={classes.scrollitem} xs={6} sm={4} md={2} lg={2} xl={2}>
                    <CardActionArea onClick={() => {alert('clicked')}}> 
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia image="images/coolGraphicsCard.jpg" className={classes.image}/>
                                <Typography>
                                    Mini Miner 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
        </div>
    );
}

export default Home;

// saw this code online
const getData = async () => {
    const response = fetch('staticdata/listingformat.json'
    ,{
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(function(response){
        console.log("fetching......");
        console.log(response)
        return response.json();
    }).then(function(myJson) {
        console.log("printing our myJson.......");
        console.log(myJson);
    })
}