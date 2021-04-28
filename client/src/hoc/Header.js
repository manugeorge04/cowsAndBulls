import React, { useContext } from 'react';
import MyContext from '../context/MyContext';



const Header = () => {  

  const {subHeader} = useContext(MyContext)

  return (
    <div className='header'>
      <img className='header__image__cow' src='images/cow.png' />
      <div className='header__container'>              
        <div className='header__title'>
          <h1>Cows and Bulls</h1>
          <h6>{subHeader || <br></br>}</h6>
        </div>           
      </div>
      <img className='header__image__bull' src='images/bull.png' />
    </div>
  )
};

export default Header;