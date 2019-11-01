import React from 'react';
import ProductShowcase from './ProductShowcase';
import './Carrousel.scss';

const Carrousel = (props) => {
  const products = props.products;

  const pathImages = 'dist/src/images/sapatos/';
  const iconNext = `${pathImages}seta-direita.png`;
  const iconPrev = `${pathImages}seta-esquerda.png`;

  const productList = products.map((product, i) => {
    return (
      <ProductShowcase product={product} key={i}/>
    )
  })

  return (
    <section className="carrousel">
      <div className="container">
        <div className="carrousel__wrap">
          <div className="carrousel__showcase">
            {productList}
          </div>

          <a className="carrousel__prev" style={{backgroundImage: `url(${iconPrev})`}}></a>
          <a className="carrousel__next" style={{backgroundImage: `url(${iconNext})`}}></a>
        </div>
      </div>
    </section>
  )
}

export default Carrousel;
