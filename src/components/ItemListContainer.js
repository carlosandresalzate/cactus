/* React */
import React from 'react';
/* Material */
import { AppBar, Box, Container, Tabs, Tab } from '@material-ui/core/';
import { TabContext, TabPanel } from '@material-ui/lab';
/* Components */
import ItemList from './ItemList';

const ItemListContainer = ({ category }) => {
  return (
    <Container>
      <Box pt={2}>
        <ItemList />
      </Box>
    </Container>
  );
};

export default ItemListContainer;
