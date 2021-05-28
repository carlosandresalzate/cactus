import React, {useEffect, useState} from 'react';
import {Container, Grid} from '@material-ui/core';
import {items} from './ItemList';
import ItemDetail from './ItemDetail';

// console.log(items);

const getItem = new Promise((resolve) => {
  setTimeout(() => {
    if (true) {
      resolve(items);
    }
  }, 2000);
});
// console.log(getItem);

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState(null);
  useEffect(() => {
    getItem
      .then((response) => response)
      .then((data) => setItemDetail(data))
      .catch((err) =>
        console.log('algo no esta bien en: ' + setItemDetail(err))
      )
      .finally(() => console.info('Promesa cumplida'));
  }, []);
  return (
    <Container>
      <h1>{console.log(itemDetail.filter((id, i) => i === 0))}</h1>
    </Container>
  );
}

export default ItemDetailContainer;
