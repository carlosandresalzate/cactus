import { Grid } from '@material-ui/core';
import React from 'react';
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

function ItemList() {
  return (
    <Grid container spacing={2}>
      {items?.map((item) => (
        <Grid item xs={12} sm={4} key={item.id}>
          <Item
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

export default ItemList;
