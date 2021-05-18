import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: '100%',
    marginBottom: '1.2rem',
    '& .MuiFormGroup-root': {
      flexDirection: 'row'
    },
    '& .MuiFormLabel-root': {
      backgroundColor: '#fff',
      fontSize: '1.6rem'
    },
    '& .MuiTypography-body1': {
      fontSize: '1.6rem'
    },
    '& .MuiSvgIcon-root': {
      width: '2rem',
      height: 'auto'
    },
    '& .MuiIconButton-label': {
      width: '5rem'
    }
  },
  error: {
    color: 'red !important'
  }
}));

const RadioField = (props) => {
  const { label, values, name, selectedValue, handleSelectValues, error } = props;
  const classes = useStyles();

  return (
      <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup aria-label="rounds" name={name} value={selectedValue} onChange={handleSelectValues}>
        {values.map((val, index) => (
          <FormControlLabel
          key={index} value={val} name={name} control={<Radio/>} label={val} />
        ))}
      </RadioGroup>
      <FormHelperText className={classes.error}
      >{error}</FormHelperText>
      </FormControl>
  );
}

export default RadioField;