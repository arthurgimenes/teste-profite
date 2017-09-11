import React from 'react';
import './ProductShowcase.scss';

const ProductShowcase = ({product, i}) => {
  const pathImages = 'dist/src/images/sapatos/'
  const stars = `${pathImages}estrelas.png`
  const buy = `${pathImages}carrinho.png`
  const imagem = `${pathImages}${product.image}`

  return (
    <div className="productShowcase" key={i}>
      <figure className="productShowcase__image">
        <img src={imagem} alt=""/>
      </figure>
      <h3 className="productShowcase__title">
        {product.productName}
      </h3>

      <div className="productShowcase__score">
        <img src={stars} alt=""/>
      </div>

      <p className="productShowcase__price">
        <span>De: {product.priceOld}</span>
        <strong>Por: {product.price}</strong>
        <br/>
        ou <strong>até {product.instalment}x</strong> de
        <strong>{product.instalmentValue}</strong>
      </p>

      <a
        href="/"
        className="productShowcase__button"
        style={{backgroundImage: `url(${buy})`}}>
        Comprar
      </a>

      <br/>

      <div className="productShowcase__discount">Economize: {product.economyValue}</div>
    </div>
  )
}

export default ProductShowcase;
