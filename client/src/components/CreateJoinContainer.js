import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from "@material-ui/core";

import Rules from './Rules';
import CreateJoinGame from './CreateJoinGame';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '3.2rem',
    width: '70%',
    margin: '0 auto',
    marginTop: '2.4rem',
    display: 'flex',
  },
}));


const CreateJoinContainer = (props) => {
  const { type } = props;
  const classes = useStyles();
  const isPC = useMediaQuery("(min-width:768px)")

  return (
    <Grid container style={{flexDirection: !isPC && 'column', padding: !isPC && '0'}}
     className={classes.root} align="center" spacing={2}>
      <Grid item xs={!isPC ? 12 : 6}>
        <Rules isPC={isPC}/>
      </Grid>
      <Grid item xs={!isPC ? 12 : 6}>
      <CreateJoinGame isPC={isPC} type={type}/>
      </Grid>
    </Grid>
  )
};

export default CreateJoinContainer;