import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: '22.5rem',
    boxShadow: '0px 0px 17px 1px #1D1F26',
    backgroundColor: '#fff',
    border: '0.1rem solid #000',
    height: props => props.isPC ? '50rem' : '40rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: '2.4rem',
    width: props => props.isPC ? '50%' : '80%',
    backgroundColor: '#0b5394',
    color: "#fff",
    margin: '1.5rem',
    fontWeight: 300,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#073763ff'
    }
  },
  title: {
    fontSize: props => props.isPC ? '2.4rem' : '2rem',
    fontWeight: 500,
    width: props => props.isPC ? '80%' : '100%',
    paddingBottom: '1.6rem',
    height: '8rem'  
  },
});

const CardHeaderWithStyle = withStyles((props) => ({
  title: {
    fontSize: props => props.isPC ? '2.4rem' : '2rem',
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

const Rules = (props) => {
  const { isPC } = props;
  const classes = useStyles(props);
 
  return (
    <Card className={classes.root}>
      <CardHeaderWithStyle
        isPC={isPC}
        title={<Typography className={classes.title}>Butter read these first, check out our modes</Typography>}
      />
      <CardContent className={classes.content}>
       <Button  className={classes.button}>
         Herds</Button>
       <Button className={classes.button}>
         Bullfight</Button>
       <Button className={classes.button}>
         Cowputer</Button>
      </CardContent>
    </Card>
  );
}

export default Rules;