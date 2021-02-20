import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: '#0388fc',
            height: '100px',
            marginTop: '20px',
        },
        typoRoot: {
            '& > * + *': {
                marginLeft: theme.spacing(5),
                //marginLeft: '5px',
            }
        },
        griditem: {
            marginTop: '20px',
        }
    }),
);

const Footer = () => {
    const classes= useStyles();
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item className={classes.griditem}>
                <Typography className={classes.typoRoot}>
                    <Link href="#" onClick={preventDefault}>
                        About BiteSite
                    </Link>
                    <Link href="#" onClick={preventDefault} color="inherit">
                        Announcements
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2">
                        Community
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2">
                        Security Center
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2">
                        Policies
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2">
                        Help & Contact
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;