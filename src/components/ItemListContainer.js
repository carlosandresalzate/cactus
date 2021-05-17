import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Container} from '@material-ui/core/';

const usesStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 10,
    },
    paper: {
        textAlign: 'center',
        padding: 4,
    }
}));


const ItemListContainer = (props) => {
    console.log(props);
    const classes = usesStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            {props.greeting}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ItemListContainer;