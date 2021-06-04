/* React */
import React from 'react';
/* Material */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Fab,
  IconButton,
  Typography,
} from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import InfoIcon from '@material-ui/icons/Info';
/* Componentes */
import ItemCount from './ItemCount';

function Item({ title, price, pictureUrl, category }) {
  return (
    <Card>
      <CardHeader title={title} />
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-around'
        p={1}
      >
        <Box>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Box>

        <Box>
          <Chip
            variant='outlined'
            color='secondary'
            label={category}
            size='small'
          />
        </Box>
      </Box>
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
