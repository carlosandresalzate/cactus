import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CartWidget from './CartWidget';
import { Button } from '@material-ui/core';

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
}));

function MyNavbar() {
  const classes = usesStyles();
  return (
    <div className={classes.root}>
      <AppBar position='relative' color='primary'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Cactus
          </Typography>
          <Button>
            <CartWidget />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MyNavbar;
