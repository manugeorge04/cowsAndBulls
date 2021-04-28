import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import InputField from '../fields/InputField';
import SelectField from '../fields/SelectField';
import RadioField from '../fields/RadioField';

import { UseFormHook } from '../hooks/UseFormHooks';

const useStyles = makeStyles({
  root: {
    minWidth: '22.5rem',
    boxShadow: '0px 0px 17px 1px #1D1F26',
    backgroundColor: '#fff',
    border: '0.1rem solid #000',
    height: props => props.type === 'join' ? '38rem' : '50rem',
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
    width: props => props.isPC ? '60%' : '80%'
  },
  inputField: {
    width: '100%',
    fontSize: '2.4rem',
    marginBottom: '1.2rem'
  },
  button: {
    fontSize: '2.4rem',
    width: props => props.isPC ? '30%' : '70%',
    backgroundColor: '#0b5394',
    color: "#fff",
    // margin: '1.2rem',
    fontWeight: 300,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#073763ff'
    }
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: 500,
    width: props => props.isPC ? '80%' : '100%',
    paddingBottom: '1.6rem',
    height: '8rem' 
  },
});

const CardHeaderWithStyle = withStyles((props) => ({
  title: {
    fontSize: '2.8rem',
    fontWeight: 500,
    width: props => props.isPC ? '80%' : '100%',
    paddingBottom: '1.6rem',
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

const initialValues = {
  name: "Enter your name",
  mode: "",
  rounds: "",
  roomId: ""
}

const CreateJoinGame = (props) => {
  const { type, isPC } = props;
  const classes = useStyles(props);
  const [ errors, setErrors ] = useState({});

  const validations = (fieldValues = formValues) => {
    let validate = {...errors};

    if('name' in fieldValues) {
      validate.name = (fieldValues.name === "" || fieldValues.name === "Enter your name")  ? "Please enter your name" : "";
      
    }

    if(type === 'create') {
      if('mode' in fieldValues) {
        validate.mode = fieldValues.mode !== "" ? "" : "Please select a game mode"
      }
  
      if('rounds' in fieldValues) {
        validate.rounds = fieldValues.rounds !== "" ? "" : "Please select number of rounds"
      }
    }

    if(type === 'join') {
      if('roomId' in fieldValues) {
        validate.roomId = fieldValues.roomId !== "" ? "" : "Please enter a room ID"
      }
    }

    setErrors({...validate});

    if(fieldValues == formValues) {
      return Object.values(validate).every((val) => val === "")
    }

  }

  const { formValues, handleInputValues, handleSelectValues } = UseFormHook(initialValues, true, validations);
  
  const onsubmit = (e) => {
    e.preventDefault();
    if(validations()) {
      console.log("allow host")
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeaderWithStyle
        title={<Typography className={classes.title}>Hay there!</Typography>}
      />
      <CardContent className={classes.content}>
        <div className={classes.textWrapper}>
        <InputField
          id="name"
          label="Name"
          name="name"
          defaultValue={formValues.name}
          error={errors.name}
          variant="outlined"
          handleInputValues={handleInputValues}
        />
        {type === 'create' && <SelectField
        name="mode"
        label="Modes"
        values={['Herds', 'Bullfight', 'Cowputer']}
        error={errors.mode}
        selectedValue={formValues.mode}
        handleSelectValues={handleSelectValues}
        />}
        {type === 'create' && <RadioField
        name="rounds"
        label="Rounds"
        values={["3","6","10"]}
        selectedValue={formValues.rounds}
        handleSelectValues={handleSelectValues}
        error={errors.rounds}
        />}
        {type === 'join' && <InputField
          id="room-id"
          name="roomId"
          label="Room ID"
          defaultValue="Enter your room ID"
          error={errors.roomId}
        />}
        </div>
       <Button className={classes.button}
       onClick={onsubmit}>
         Host</Button>
      </CardContent>
    </Card>
  );
}

export default CreateJoinGame;