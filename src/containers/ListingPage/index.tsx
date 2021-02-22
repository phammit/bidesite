import react, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


interface someProps {

}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("clicked a breadcrumb");
}

const useStyles = makeStyles({
    breadcrumb: {
        marginLeft: '40px',
    },
    container: {
        border: '1px',
    },
    addpadding: {
        padding: "20px",
    },
    formargin: {
        margin: "0px 30px",
    },
    rightcolumn: {
        //marginLeft: "10px",
    },
})

const ListingPage: FC<someProps> = ({}) => {
    const classes= useStyles();

    return (
        
        <Grid container spacing={6} justify="center">
            <Grid item xs={12}>
                <Grid container>
                    <Grid item justify="flex-start" >
                        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
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
                        <Grid container>
                            <Grid item xs={12} className={classes.addpadding}>
                                <Paper>Pictures of product with carousol</Paper>
                                <ImageGallery items={images} showPlayButton={false} showBullets={true}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper>HTML editor</Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.rightcolumn}>
                        <Paper>Item Information Column</Paper>
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