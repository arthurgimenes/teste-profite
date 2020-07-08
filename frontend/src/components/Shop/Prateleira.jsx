import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardProduct from './CardProduct';
import { getProductList } from '../../services/getData';
import loadImg from '../../assets/img/loading.svg'



const SPrateleira = styled.div`
min-height:430px;
width:100%;
display:flex;
justify-content: center;
align-items:center;
`;

const Prateleira = () => {
    const [listProducts, setListProducts] = useState();
    const [loadData, setLoadData] = useState(true);
    const productPerPage = 4;

    useEffect(() => {
        (async () => {
            const productListFetch = await getProductList();
            console.log('-[Prateleira ProductList]- fetch >', productListFetch);
            setListProducts(productListFetch)
            setLoadData(false);
        })();
    }, [])


    return (
        <SPrateleira>

            {
                loadData ? <img src={loadImg} alt="Load" /> :
                    listProducts.map((product, ind) => ind < productPerPage ? <CardProduct key={product.name} product={product} /> : null)

            }
        </SPrateleira>
    );
}

export default Prateleira;