import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MyContext from '../context/MyContext';
import { Link } from "react-router-dom";

const useStyles = makeStyles({  
  button: {
    fontSize: '2.4rem',
    width: '50%',
    backgroundColor: '#0b5394',
    color: "#fff",    
    fontWeight: 300,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#073763ff'
    }
  }
});

const NotFound = () => {
  const classes = useStyles()
  const { subHeader, setSubHeader } = useContext(MyContext);  
  useEffect(() => {
    setSubHeader("Error Page");
    document.body.style.backgroundImage = "url('images/background.png')";    

    return function cleanup() {
      document.body.style.background = "linear-gradient(#f2f2f2ff, #a6a6a6ff)" //($light-grey, $dark-grey);
    };
  }, [subHeader]);

  return (
    <div className={'NotFoundPage'}>
      <Typography variant="h1" align="center" paragraph={true} >
        Error 404
      </Typography>
      <Typography variant="h2" align="center" paragraph={true} >
        Holy Cow!     
      </Typography>
      <Typography variant="h2" align="center" paragraph={true} >
        The webpage you’re looking for doesn’t seem to be on this farm.
      </Typography>
      <Typography variant="h2" align="center" paragraph={true} >
        Please check your sources and moo on to the correct one!
      </Typography>
      <Button component={Link} to="/" className={classes.button}>
        Go Home
      </Button>
    </div>
  )
};

export default NotFound;
