import react, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Box from '@material-ui/core/Box';
import green from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EscrowProviderList from '../../components/EscrowProviderList';
import Rating from '@material-ui/lab/Rating';


interface ListingProps {

}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("clicked a breadcrumb");
}

const useStyles = makeStyles(theme => ({
    breadcrumb: {
        marginLeft: '40px',
        //font: '1.0rem',  //did not do anything
    },
    container: {
        border: '1px',
    },
    addpadding: {
        padding: "20px",
        maxWidth: "600px",
    },
    formargin: {
        margin: "0px 30px",
    },
    rightcolumn: {
        //marginLeft: "10px",
    },
    button: {
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'green[500]',
        },
    },
    box: {
        //minHeight: "50",
        //padding: "10",
        //marginTop: "10",
        backgroundColor: '#fafafa',
        //margin: '20 0 20',
    },
    alignText: {
        textAlign: "left",
        padding: "3px",
    }
}))

const ListingPage: FC<ListingProps> = ({}) => {
    const classes= useStyles();

    return (
        
        <Grid container spacing={6} justify="center">
            <Grid item xs={12}>
                <Grid container>
                    <Grid item justify="flex-start" >
                        <Breadcrumbs aria-label="breadcrumb" 
                            separator={<NavigateNextIcon fontSize="small" />} className={classes.breadcrumb}>
                            <Link color="inherit" href="/" onClick={handleClick}>
                                BideSite
                            </Link>
                            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                                Main Type
                            </Link>
                            <Typography color="textPrimary">ListingPage</Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.formargin}>
                <Grid container className={classes.container} spacing={3}>
                    <Grid item xs={7} className={classes.container}>
                        <Paper>Product Column Section 1</Paper>
                        <Grid container >
                            <Grid item xs={11} className={classes.addpadding} >
                                <Paper>Pictures of product with carousol</Paper>
                                <ImageGallery items={images} showPlayButton={false} showBullets={true} thumbnailPosition="left"
                                    slideOnThumbnailOver={true}/>
                            </Grid>
                            <Grid item xs={11} justify="flex-start">
                                <Paper>Description of Item</Paper><br />
                                <Card className={classes.alignText}>This is a great starter rig for cryptocurrency mining that will immediately bring in revenue with 1 (one) Nvidia RTX 3070 GPU pre-installed. It will mine 194-208MH/s out of the box with an expandable capacity of up to 600MH/s!<br /><br />
                                        This rig comes with 2 (two) Nvidia GeForce RTX 3080 GPUs and is set up to expand up to 6.<br /><br />
                                        Also included is a free setup and technical support session as needed to start earning immediately upon delivery.<br /><br />
                                        It is fully built and ready to ship.<br /><br />
                                        Just plug it in and go!<br /><br />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.rightcolumn} >
                        <Paper>Item Information Column</Paper>
                        <Grid container justify="center">
                            <Grid item xs={12} >
                                <Card className={classes.box}>
                                    <CardContent>
                                        <Typography variant="h6" 
                                            component="h6" 
                                            gutterBottom
                                        >
                                            Condition: new 
                                        </Typography>
                                        <Typography variant="body1" 
                                            gutterBottom
                                        >
                                            Available: 10,  5 sold
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <Typography gutterBottom variant="h5">Price: 10.25 USD</Typography>
                                    <Box m={1}>    0.003 BTC </Box>
                                    <Box m={1}>    "Venmo" "Crypto"</Box>
                                </Card>
                                <Paper>
                                    <Box m={2}> Qty Available: 1  </Box>
                                    <Box m={1}>  Buy Now   </Box>
                                    <Box m={2}>   Make an Offer   </Box>
                                </Paper>
                                <Paper>
                                    <Typography gutterBottom
                                        variant="h6"
                                    >
                                        Seller Information  
                                    </Typography>
                                    <Box m={2}>   my_account001   </Box>
                                    <Box m={2}>   stars   </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper>
                                    <Typography variant="h6"
                                        gutterBottom
                                    >
                                        Accepted Escrow Providers
                                    </Typography>
                                    <Box>
                                        Agent001
                                    </Box>
                                    <Box>
                                        Agent002
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper>
                                    Escrow Component
                                </Paper>
                                <EscrowProviderList />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    );
}

export default ListingPage;

const images = [
    {
        original: "http://localhost:3000/images/miniMiner.jpg",
        thumbnail: "http://localhost:3000/images/miniMiner.jpg",
    },
    {
        original: "http://localhost:3000/images/bitcoin.jpg",
        thumbnail: "http://localhost:3000/images/bitcoin.jpg",
    },
    {
        original: "http://localhost:3000/images/coolGraphicsCard.jpg",
        thumbnail: "http://localhost:3000/images/coolGraphicsCard.jpg",
    },
    {
        original: "http://localhost:3000/images/miniWallet.jpg",
        thumbnail: "http://localhost:3000/images/miniWallet.jpg",
    },
    {
        original: "http://localhost:3000/images/redScooter.jpg",
        thumbnail: "http://localhost:3000/images/redScooter.jpg",
    },
    {
        original: "http://localhost:3000/images/RTX2080.jpg",
        thumbnail: "http://localhost:3000/images/RTX2080.jpg",
    },
]

const listingInformation = {
    
}

const description = {

}