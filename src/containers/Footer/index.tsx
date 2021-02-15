import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: '#0388fc',
            height: '100px'
        },
    }),
);

const Footer = () => {
    const classes= useStyles();

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item>
                <h1>Footer</h1>
            </Grid>
        </Grid>
    );
}

export default Footer;