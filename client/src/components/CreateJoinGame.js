import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import InputField from '../fields/InputField';

const useStyles = makeStyles({
  root: {
    minWidth: 225,
    boxShadow: '0px 0px 17px 1px #1D1F26',
    backgroundColor: '#fff',
    border: '0.1rem solid #000',
    height: '40rem',
    '& .MuiTextField-root': {
      width: '100%',
      fontSize: '2rem',
      color: '#000',
      border: '1px solid white'
    },
    '& .MuiFormHelperText-root': {
      fontSize: '1rem',
      color: '#000',
    }, 
    '& .MuiInputLabel-root': {
      fontSize: '1.3rem',
      backgroundColor: "white",
      paddingRight: '.5rem',
      color: '#000',
    },
    '& .MuiInputBase-input': {
      fontSize: '1.7rem',
      backgroundColor: "#f3f3f3ff"
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWrapper: {
    fontSize: '2.4rem',
    width: '60%'
  },
  inputField: {
    width: '100%',
    fontSize: '2.4rem',
    marginBottom: '1.2rem'
  },
  button: {
    fontSize: '2.4rem',
    width: '30%',
    backgroundColor: '#0b5394',
    color: "#fff",
    // margin: '1.2rem',
    fontWeight: 300,
    textTransform: 'capitalize'
  }
});

const CardHeaderWithStyle = withStyles((props) => ({
  title: {
    fontSize: '2.8rem',
    fontWeight: 500,
    width: '80%',
    paddingBottom: '1.2rem',
    height: '8rem' 
  },
  content: {
    borderBottom: '0.1rem solid #000'
  },
  root: {
    padding: '1.2rem 0',
    height: '10rem'
  }
}))(CardHeader);


const CreateJoinGame = (props) => {
  const { type } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeaderWithStyle
        title="Hay there!"
      />
      <CardContent className={classes.content}>
        <div className={classes.textWrapper}>
        <InputField
          id="name"
          label="Name"
          defaultValue="Enter your name"
          error=""
          variant="outlined"
        />
        {type === 'join' && <InputField
          id="room-id"
          name="name"
          label="Room ID"
          defaultValue="Enter your room ID"
          error=""
          variant="outlined"
        />}
        </div>
       <Button className={classes.button}>
         Host</Button>
      </CardContent>
    </Card>
  );
}

export default CreateJoinGame;