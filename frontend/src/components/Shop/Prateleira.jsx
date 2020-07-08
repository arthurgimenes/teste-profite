import React from 'react';
import styled from 'styled-components';
import CardProduct from './CardProduct';

import loadImg from '../../assets/img/loading.svg'



const SPrateleira = styled.div`
min-height:430px;
width:100%;
display:flex;
justify-content: center;
align-items:center;
`;

const Prateleira = ({ loadData, listProducts, producstPerPage }) => {

    console.log(listProducts[0], producstPerPage)

    return (
        <SPrateleira>
            {
                loadData ? <img src={loadImg} alt="Load" /> :
                    listProducts.map((product, ind) => ind < producstPerPage ? <CardProduct key={product.name} product={product} /> : null)

            }
        </SPrateleira>
    );
}

export default Prateleira;