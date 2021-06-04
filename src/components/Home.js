/* React */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* Material */
import { Container } from '@material-ui/core';
/* Components */
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const Home = () => (
  <Container>
    <Switch>
      <Route exact path='/'>
        <ItemListContainer />
      </Route>
      <Route path='/category/:id'>
        <ItemListContainer />
      </Route>
      <Route path='/item/:id'>
        <ItemDetailContainer />
      </Route>
    </Switch>
  </Container>
);

export default Home;
