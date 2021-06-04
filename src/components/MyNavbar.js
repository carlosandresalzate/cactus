/* React */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
/* Material */
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
/* Componentes */
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
}));

function MyNavbar() {
  const classes = usesStyles();
  return (
    <div className={classes.root}>
      <AppBar position='relative' color='primary'>
        <Toolbar>
          <Typography
            variant='h6'
            className={classes.title}
            component={NavLink}
            to='/'
          >
            Cactus
          </Typography>

          <Button color='inherit' component={NavLink} to='/category/:id'>
            ItemListContainer
          </Button>

          <Button color='inherit' component={NavLink} to='/item/:id'>
            ItemDetailContainer
          </Button>
          <Button component={NavLink} to='/cart'>
            <CartWidget />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MyNavbar;
