import React from 'react';
import ProductShowcase from './ProductShowcase';
import './Carrousel.scss';

const Carrousel = () => {
  const pathImages = 'dist/src/images/sapatos/';
  const iconNext = `${pathImages}seta-direita.png`;
  const iconPrev = `${pathImages}seta-esquerda.png`;

  return (
    <section className="carrousel">
      <div className="container">
        <div className="carrousel__wrap">
          <div className="carrousel__showcase">
            <ProductShowcase />
            <ProductShowcase />
            <ProductShowcase />
            <ProductShowcase />
          </div>
          
          <a className="carrousel__prev" style={{backgroundImage: `url(${iconPrev})`}}></a>
          <a className="carrousel__next" style={{backgroundImage: `url(${iconNext})`}}></a>
        </div>
      </div>
    </section>
  )
}

export default Carrousel;
