import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles({
  root: {
  },
  inputField: {
    width: '100%',
    fontSize: '2.4rem',
    // marginBottom: '1.2rem'
  },
  error: {
    color: 'red !important'
  }
});

const InputField = (props) => {
  const { name, label, defaultValue, error, handleInputValues } = props;
  const classes = useStyles();

  return (
    <Fragment>
       <TextField
          id={name}
          label={label}
          name={name}
          placeholder={defaultValue}
          // helperText={error}
          // error={!!error}
          variant="outlined"
          onChange={handleInputValues}
          className={`${classes.inputField} ${classes.root}`}
        />
        <FormHelperText className={classes.error}
        style={{marginBottom: '1.2rem'}}>{error}</FormHelperText>
    </Fragment>
  );
}

export default InputField;