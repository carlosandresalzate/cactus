/* React */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* Material */
import { Button, Fab, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
/* Components */

function ItemCount({ initial, stock, addOn }) {
  const [count, setCount] = useState(initial);
  return (
    <Grid container spacing={1} direction='row' justify='space-around'>
      <Fab
        color='secondary'
        size='medium'
        // className={classes.buttonColor}
        aria-label='remove'
        onClick={() =>
          count === initial ? setCount(count) : setCount(count - 1)
        }
      >
        <RemoveIcon />
      </Fab>
      <p>{count}</p>

      <Fab
        color='secondary'
        size='medium'
        // className={classes.buttonColor}
        aria-label='add'
        onClick={() =>
          count !== stock && count < stock
            ? setCount(count + 1)
            : setCount(count)
        }
      >
        <AddIcon />
      </Fab>
      <Grid item xs={12}>
        <Button
          component={Link}
          to='/item/:id'
          variant='outlined'
          color='secondary'
          fullWidth={true}
          onClick={() => console.log(`el numero de items es ${count}`)}
        >
          Agregar
        </Button>
      </Grid>
    </Grid>
  );
}

export default ItemCount;
