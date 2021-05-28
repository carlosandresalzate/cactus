import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import {items} from './ItemList';
import ItemDetail from './ItemDetail';

const singleItem = items.filter((item) => item.id === 1);

const getItem = new Promise((resolve) => {
  setTimeout(() => {
    resolve(singleItem);
  }, 2000);
});

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState(null);
  useEffect(() => {
    getItem
      .then((response) => response)
      .then((data) => {
        setItemDetail(data);
      })
      .catch((err) =>
        console.log('algo no esta bien en: ' + setItemDetail(err))
      )
      .finally(() => console.info('Promesa cumplida'));
  }, []);
  return (
    <Grid container spacing={2}>
      {itemDetail?.map((item) => (
        <Grid item xs={12} sm={6} key={item.id} pt={2}>
          <ItemDetail
            title={item.title}
            pictureUrl={item.pictureUrl}
            description={item.description}
            price={item.price}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemDetailContainer;
