import react, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


interface someProps {

}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("clicked a breadcrumb");
}

const useStyles = makeStyles({
    breadcrumb: {
        marginLeft: '20px',
    },
    container: {
        border: '1px',
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
            <Grid item xs={12}>
                <Grid container className={classes.container}>
                    <Grid item xs={8} className={classes.container}>
                        <Paper>Product Column Section 1</Paper>
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper>Pictures of product with carousol</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper>HTML editor</Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>Item Information Column</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    );
}

export default ListingPage;