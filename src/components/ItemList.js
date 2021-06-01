import { Grid } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import Item from './Item';

const items = [
  {
    id: 1,
    title: '01 Mammillaria matudae',
    description:
      'El nombre Mammillaria proviene de la palabra latina mamma, que se refiere a los tubérculos que cubren el cuerpo de la planta y que, para varias especies, contiene una savia lechosa o látex.',
    price: 200,
    pictureUrl: './img/matudae.png',
  },
  {
    id: 2,
    title: '02 Mammillaria matudae ',
    description:
      'El nombre Mammillaria proviene de la palabra latina mamma, que se refiere a los tubérculos que cubren el cuerpo de la planta y que, para varias especies, contiene una savia lechosa o látex.',
    price: 450,
    pictureUrl: './img/matudae.png',
  },
  {
    id: 3,
    title: '03 Mammillaria matudae',
    description:
      'El nombre Mammillaria proviene de la palabra latina mamma, que se refiere a los tubérculos que cubren el cuerpo de la planta y que, para varias especies, contiene una savia lechosa o látex.',
    price: 300,
    pictureUrl: './img/matudae.png',
  },
  {
    id: 4,
    title: '04 Mammillaria matudae',
    description:
      'El nombre Mammillaria proviene de la palabra latina mamma, que se refiere a los tubérculos que cubren el cuerpo de la planta y que, para varias especies, contiene una savia lechosa o látex.',
    price: 300,
    pictureUrl: './img/matudae.png',
  },
];

const itemListproduct = new Promise((resolve) => {
  setTimeout(() => {
    if (true) {
      resolve(items);
    }
  }, 2000);
});

function ItemList() {
  const [item, setItem] = useState(null);
  useEffect(() => {
    itemListproduct
      .then((response) => response)
      .then((data) => {
        setItem(data);
      })
      .catch((err) => console.log('algo no esta bien en: ' + setItem(err)))
      .finally(() => console.log('promesa cumplida'));
  }, []);
  return (
    <Grid container spacing={2}>
      {item?.map((item) => (
        <Grid item xs={12} sm={4} key={item.id}>
          <Item
            title={item.title}
            pictureUrl={item.pictureUrl}
            description={item.description}
            price={'$' + item.price}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export { items };
export default ItemList;
