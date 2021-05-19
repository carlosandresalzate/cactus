import React, { useState } from 'react';
import { Fab, Grid,  makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const usesStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
   buttonColor: {
     background: '#CA6C73',
     color: '#f2ebe3',
     '&:hover': {
            background: '#E0777E'
        }
  }, 
 }));

function ItemCount() {
  const classes = usesStyles();

  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={4}>
      <Fab size="medium" className={classes.buttonColor} aria-label='remove' onClick={() => (count === 0) ? setCount(0) : setCount(count - 1)}>
        <RemoveIcon />
      </Fab>
      </Grid>
      <Grid item xs={4}>
        <p>{ count }</p>
      </Grid>
      <Grid item xs={4}>
        <Fab size="medium" className={classes.buttonColor} aria-label='add' onClick={() => (count === 10) ? setCount(count) : setCount(count + 1)}>
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default ItemCount;
