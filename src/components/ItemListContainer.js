import React from 'react';
import { Container, Box } from '@material-ui/core/';
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <Container>
      <Box pt={2}>
        <ItemList />
      </Box>
    </Container>
  );
};

export default ItemListContainer;
