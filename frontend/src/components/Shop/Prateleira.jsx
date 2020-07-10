import React from 'react';
import styled from 'styled-components';
import CardProduct from './CardProduct';

import loadImg from '../../assets/img/loading.svg'



const SPrateleira = styled.div`
width:100%;
display:flex;
min-height:200px;
justify-content: center;
align-items:center;
`;

const Prateleira = ({ loadData, listProducts, producstPerPage }) => {


    return (
        <SPrateleira>
            {
                loadData ? <img src={loadImg} alt="Load" />
                    : listProducts.map((product, ind) => ind < producstPerPage ? <CardProduct key={product.name} product={product} /> : null)

            }
        </SPrateleira>
    );
}

export default Prateleira;