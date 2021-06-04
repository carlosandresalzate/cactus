import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from '@material-ui/core';
import ItemCount from './ItemCount';

function ItemDetail({ title, description, price, pictureUrl }) {
  return (
    <Box pt={2}>
      <Card>
        <CardHeader title={title} />
        <CardMedia component='img' image={pictureUrl} height='140' />
        <CardContent>
          <Typography
            variant='body2'
            color='textPrimary'
            component='p'
            align='center'
          >
            {description}
          </Typography>
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
    </Box>
  );
}

export default ItemDetail;
