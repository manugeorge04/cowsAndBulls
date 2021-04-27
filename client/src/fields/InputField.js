import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
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
  inputField: {
    width: '100%',
    fontSize: '2.4rem',
    marginBottom: '1.2rem'
  },
});

const InputField = (props) => {
  const { name, label, defaultValue, error } = props;
  const classes = useStyles();

  return (
        <TextField
          id={name}
          label={label}
          placeholder={defaultValue}
          helperText={error}
          error={!!error}
          variant="outlined"
          className={`${classes.inputField} ${classes.root}`}
        />
  );
}

export default InputField;