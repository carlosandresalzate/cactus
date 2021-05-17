import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartWidget from './CartWidget';


const usesStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    color: {
        boxShadow: 'none',
        backgroundColor: '#f2ebe3',
        color: '#2a324E',
    },
}));

function MyNavbar() {
    const classes = usesStyles();
    return (
        <div className={classes.root}>
            <AppBar position="relative" className={classes.color}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Cactus
                    </Typography>
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MyNavbar;