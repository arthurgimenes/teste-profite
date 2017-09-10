import React from 'react';
import './ProductShowcase.scss';

const ProductShowcase = () => {
  const pathImages = 'dist/src/images/sapatos/'
  const stars = `${pathImages}estrelas.png`
  const buy = `${pathImages}carrinho.png`
  const sapato = `${pathImages}calcado1.png`

  return (
    <div className="productShowcase">
      <figure className="productShowcase__image">
        <img src={sapato} alt=""/>
      </figure>
      <h3 className="productShowcase__title">
        Sandália Ferracini Ecologic
      </h3>

      <div className="productShowcase__score">
        <img src={stars} alt=""/>
      </div>

      <p className="productShowcase__price">
        <span>De: R$ 99,90</span>
        <strong>Por: R$ 79,90</strong>
        <br/>
        ou <strong>até 3x</strong> de <strong>R$ 26,64</strong>
      </p>

      <a
        href="/"
        className="productShowcase__button"
        style={{backgroundImage: `url(${buy})`}}>
        Comprar
      </a>

      <br/>

      <div className="productShowcase__discount">Economize: R$ 19,98</div>
    </div>
  )
}

export default ProductShowcase;
