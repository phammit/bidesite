import React, { FC } from 'react';
import { makeStyles, fade, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from "@material-ui/core/SvgIcon";
import WaykichainIcon from "waykichain-icon";

import logo from "./logo.svg";
//import GmailIcon from "./../../icons/GmailIcon";
import GmailIcon from "gmail-icon";
import { ReactComponent as NewIcon } from './logo.svg';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  myicon: {

  },
  grow: {
    flewGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
   
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export interface HeaderProps {};

export interface IconProps {
  color?: string,
};

const HomeIcon: FC<IconProps> = (props) => {
  return (
    <SvgIcon  style= {{ color: green[500] }}>
      {logo}
    </SvgIcon>
  )
}

const ButtonAppBar: FC<HeaderProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <HomeIcon />
              </IconButton>
              <GmailIcon />
              <WaykichainIcon />
              <HomeIcon />
              <SvgIcon component={NewIcon} viewBox=" 0 0 400 276.6" />
            </Grid>
            <Grid item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
          </Grid>
            

            <Grid item>  
              <Button color="inherit">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;



//<img src={logo} className="App-logo" alt="logo" height="1vmax" />
/**
 <Typography variant="h6" className={classes.title}>
            Header Alternative #2
          </Typography>


          <div className={classes.grow} />
 */