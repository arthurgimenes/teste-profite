import React from 'react';
import './SlideShow.scss';

const SlideShow = () => {
  return (
    <div className="slideShow">
      <figure className="slideShow__slide">
        <img src="dist/src/images/banner/desktop/banner1.jpg" alt=""/>
      </figure>

      <a href="javscript:;" className="slideShow__prev"></a>
      <a href="" className="slideShow__next"></a>

      <nav className="slideShow__current">
        <a href="javscript:;"></a>
      </nav>
    </div>
  )
}

export default SlideShow;
