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
                  <Button variant="contained" component={RouterLink} to="/productgalleryminers"><h3>Miners</h3></Button>
              </Grid>
              <Grid item>
                  <h3>Computers</h3>
              </Grid>
              <Grid item>
                  <h3>Graphics Cards</h3>
              </Grid>
              <Grid item>
                  <h3>Electronics</h3>
              </Grid>
              <Grid item>
                  <h3>Cool Stuff</h3>
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