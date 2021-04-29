import React, { useContext } from 'react';

import Typography from '@material-ui/core/Typography';
import MyContext from '../context/MyContext';



const Header = () => {  

  const {subHeader} = useContext(MyContext)

  return (
    <div className='header'>
      <img className='header__image__cow' src='images/cow.png' />
      <div className='header__container'>              
        <div className='header__title'>
        <Typography variant="h1">Cows and Bulls</Typography>
        <Typography variant="h6">{subHeader || <br></br>}</Typography>
        </div>           
      </div>
      <img className='header__image__bull' src='images/bull.png' />
    </div>
  )
};

export default Header;