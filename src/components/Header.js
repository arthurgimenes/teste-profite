import React from 'react';
import './Header.scss';
import SlideShow from './SlideShow';

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <SlideShow />
      </div>
    </section>
  )
}

export default Header;
