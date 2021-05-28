import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ItemCount from './ItemCount';

function Item({ title, price, pictureUrl }) {
  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia component='img' image={pictureUrl} height='140' />
      <CardContent>
        <Typography
          variant='body1'
          color='textPrimary'
          component='p'
          align='right'
        >
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={10} initial={1} />
      </CardActions>
    </Card>
  );
}
export default Item;
