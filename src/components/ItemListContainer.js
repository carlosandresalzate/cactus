/* React */
import React from 'react';
/* Material */
import { Container, Box } from '@material-ui/core/';
import { borders } from '@material-ui/system';
/* Components */
import ItemList from './ItemList';

const ItemListContainer = ({ item }) => {
  return (
    <Container>
      <Box pt={2} borderRadius='50%'>
        <ItemList />
      </Box>
    </Container>
  );
};

export default ItemListContainer;
