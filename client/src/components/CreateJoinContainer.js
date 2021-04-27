import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Rules from './Rules';
import CreateJoinGame from './CreateJoinGame';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '3.2rem',
    width: '80%',
    border: '0.1rem solid #000',
    margin: '0 auto',
    marginTop: '2.4rem',
    display: 'flex',
  },
}));


const CreateJoinContainer = (props) => {
  const { type } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root} align="center" spacing={2}>
      <Grid item xs={6}>
        <Rules/>
      </Grid>
      <Grid item xs={6}>
      <CreateJoinGame type={type}/>
      </Grid>
    </Grid>
  )
};

export default CreateJoinContainer;