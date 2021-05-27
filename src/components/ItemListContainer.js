import React from 'react';
import { Container } from '@material-ui/core/';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
  console.log(props);
  return (
    <Container>
      <ItemList />
    </Container>
  );
};

export default ItemListContainer;
