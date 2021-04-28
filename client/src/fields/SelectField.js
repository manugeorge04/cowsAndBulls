import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: '100%',
    marginBottom: '1.2rem',
    '& .MuiSvgIcon-root': {
      width: '5rem',
      height: '2.5rem'
    },
  },
  error: {
    color: 'red !important'
  }
}));

const SelectField = (props) => {
  const { name, label, values, error, selectedValue, handleSelectValues } = props;
  const classes = useStyles();
 
  return (
    <FormControl variant="outlined" className={classes.formControl}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select
      native
      value={selectedValue}
      onChange={handleSelectValues}
      label={label}
      inputProps={{
        name: name,
        id: 'select-modes',
      }}
    >
      <option aria-label="None" value="" />
     { values.map((val, index) => (
       <option key={index} value={`${val}`}>{val}</option>
     ))}
    </Select>
    <FormHelperText className={classes.error}
    style={{marginLeft: 0}}>{error}</FormHelperText>
  </FormControl>
  );
}

export default SelectField;