import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <img className='header__image__cow' src='images/cow.png' />
      <div className='header__container'>              
        <h1 className='header__title'>Cows and Bulls</h1>              
      </div>
      <img className='header__image__bull' src='images/bull.png' />
    </div>
  )
};

export default Header;