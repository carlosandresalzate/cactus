import React from 'react';
import {Container} from '@material-ui/core/';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = () => {
  return (
    <Container>
      <ItemDetailContainer />
      {/* <ItemList /> */}
    </Container>
  );
};

export default ItemListContainer;
