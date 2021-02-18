import React, { FC } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
           // '& > *': {
           //     margin: theme.spacing(1),
           // },
        },
        button: {
            backgroundColor: 'transparent',
            boxShadow: '0px 0px 0px 0px',
        },
    }),
);



export interface DropdownProps {

};

const DropDownHeader: FC<DropdownProps> =({}) => {

    const classes = useStyles();

    return (
      <Container className={classes.root}>
          <Grid container justify="space-evenly">
              <Grid item>
                  <Button variant="contained" component={RouterLink} to="/productgalleryminers" className={classes.button}>Miners</Button>
              </Grid>
              <Grid item>
                    <Button variant="contained" component={RouterLink} to="/productgalleryminers" className={classes.button}>Computers</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" component={RouterLink} to="/productgalleryminers" className={classes.button}>Graphics Cards</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" component={RouterLink} to="/productgalleryminers" className={classes.button}>Electronics</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" component={RouterLink} to="/productgalleryminers" className={classes.button}>Cool Stuff</Button>
              </Grid>

          </Grid>
      </Container>  
    );
/*
    return (
        <Container>
            <Toolbar >
                <p>hello</p>
            </Toolbar>
        </Container>
    );
*/
}

export default DropDownHeader;