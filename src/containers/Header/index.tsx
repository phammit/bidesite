import React, { FC } from "react";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import "../../index.css";
import { Link as RouterLink } from "react-router-dom";
import { relative } from "path";

const useStyles = makeStyles(() =>({
    header: {
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
        display: "flex",
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
    const { header, logo, menuButton, toolbar } = useStyles();

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
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}

export default Header;