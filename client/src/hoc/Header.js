import React, { useContext } from 'react';
import { useMediaQuery } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import MyContext from '../context/MyContext';



const Header = () => {  

  const {subHeader} = useContext(MyContext)
  const isPC = useMediaQuery("(min-width:45rem)", {noSsr:true})    

  return (
    <div className='header'>
      <img className='header__image__cow' src='images/cow.png' />
      <div className='header__container'>              
        <div className='header__title'>
        
        <Typography variant={isPC?"h1":"h3"} className='headerText'>Cows and Bulls</Typography>
        <Typography variant={isPC?"h3":"h6"} className='subHeaderText'>{subHeader || <br></br>}</Typography>
        </div>           
      </div>
      <img className='header__image__bull' src='images/bull.png' />
    </div>
  )
};

export default Header;