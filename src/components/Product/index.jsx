import React from 'react';

import IconCart from './icon-cart.svg';
import OfferFlag from './offer-flag.png';
import RatingStar from './rating-star.svg';
import ProductStyle from './styles';

class Product extends React.Component {

    render() {
        const { data, width } = this.props;

        let ratingTemplate = [];
        for (let i = 0; i < data.rating; i++) {
            ratingTemplate.push(
                <img key={i} src={RatingStar} alt="Avaliação" />
            );
        }

        let flag = data.flag !== '' ? <img className="flag" src={OfferFlag} alt="Oferta" /> : '';

        return (
            <ProductStyle width={width}>
                {flag}
                <img className="image" src={data.image} alt={data.name} />
                <h4 className="name">{data.name}</h4>
                <div className="rating">{ratingTemplate}</div>
                <p className="price price--old">{(data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className="price">{(data.current_price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className="price price--installments">ou em {data.max_installments}x de {(data.current_price / data.max_installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <button className="button">
                    <img src={IconCart} alt="Comprar" />
                    <span>Comprar</span>
                </button>
            </ProductStyle>
        );
    }

}

export default Product;