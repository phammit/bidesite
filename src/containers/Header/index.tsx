import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SearchBar from 'material-ui-search-bar';
import { ReactComponent as NewIcon } from './logo.svg';

const useStyles = makeStyles(() => ({
        title: {

        },
        rightElement: {
            //float: "left", didn't work
            //flex: '1 0 0',
        },
        leftElement: {
            //flex: '1 0 0',
        },
        middleElement: {
            //flex: '3 0 0',
            width: '50%',
        },
        appBar: {
            justifyContent: "space-between",
        },
        searchBar: {
            boxShadow: "1px 1px 1px 1px",
        },
    })
)

export interface headerProps {

}

const Header: FC<headerProps> = ({}) => {
    const classes = useStyles();
    const [language, setLanguage] = React.useState('');
    const [searchBar, setSearchBar] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLanguage(event.target.value as string);
    };

    const doSomething = () => {}

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.appBar}>
                    <div className={classes.leftElement}>    
                        <Button>
                            <SvgIcon component={NewIcon} viewBox=" 0 0 400 276.6" fontSize="large"/>
                            <Typography className={classes.title} variant="h6">
                                Bidsite
                            </Typography>
                        </Button>
                    </div>
                    <div className={classes.middleElement}>
                        <SearchBar 
                            value={searchBar}
                            onChange={(newValue) => setSearchBar(newValue)}
                            onRequestSearch={() => doSomething()}
                            className={classes.searchBar}
                        />
                    </div>
                    <div className={classes.rightElement}>
                        <Button>
                            English
                        </Button>
                        <IconButton aria-label="MenuforAccessibility" color="primary">
                            <Badge badgeContent={11} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Button>
                            <Typography>
                                Login
                            </Typography>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Header;



/*
import React, { FC } from "react";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import "../../index.css";
import { Link as RouterLink } from "react-router-dom";
import { relative } from "path";


const useStyles = makeStyles(() =>({
    myheader: {
        backgroundColor: "#00BFFF",
        //paddingRight: "79px",
        //paddingLeft: "118px",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "39px",
    },
    toolbar: {
        //display: "flex",
        justifyContent: "space-between",
    },
}));

const headersData = [
    {
        label: "LogIn",
        href: "/login",
    },
    {
        label: "shoppingCart",
        href: "/shoppingCart",
    }
];

export interface headerProps {};

const Header: FC<headerProps> = () => {
    const { myheader, logo, menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
        return <Toolbar className={toolbar}>
            {myLogo}
            <div>{getMenuButtons()}</div>
        </Toolbar>
    }

    const myLogo = (
        <Typography variant ="h6" component="h1" className={logo}>
            CorporateLogo
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button 
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            )
        });
    }

    return (
        <header>
            <AppBar className={myheader}>{displayDesktop()}</AppBar>
            <Toolbar />
        </header>
    );
}

export default Header;
*/