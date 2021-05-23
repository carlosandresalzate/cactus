import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core/';

import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
  console.log(props);
  return (
    <Container style={{ paddingTop: 16 }}>
      <Grid item xs={3}>
        <Card>
          <CardHeader title={props.greeting} />
          <CardMedia component='img' image='/img/cactus_1.jpg' height=' 140' />
          <CardContent>
            <Typography variant='body2' color='textPrimary' component='p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut rem
              quis quibusdam eos ipsam sequi itaque.
            </Typography>
          </CardContent>
          <CardActions>
            <ItemCount stock={10} initial={1} />
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default ItemListContainer;
