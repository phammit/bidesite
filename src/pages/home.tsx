import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { green } from "@material-ui/core/colors";
import React, { FC, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import miniMiner from './miniMiner.jpg';
import { getAllJSDocTags } from "typescript";


const useStyles = makeStyles({
    root: {
        paddingTop: 30,
        paddingBottom: 30,
        boxShadow: '0px 0px 0px 1px',
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

const Home: FC<HomeProps> = () => {
    const classes = useStyles();

    useEffect(() => {
        //fetching static data in public folder
        getData();
    },[]);

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


const getData = () => {
    fetch('staticdata/listingformat.json'
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