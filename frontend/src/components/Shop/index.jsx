import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Prateleira from './Prateleira';
import Pagination from './Pagination';
import { getProductList } from '../../services/getData';

const SShop = styled.div`
height:auto;
width:1200px;

`;
const Text = styled.h1`
color:#000;
font-size:3rem;
font-style: normal;
font-weight: bold;
font-size:2rem;
line-height: 2.2rem;
margin-bottom:0.5rem;
margin-top:1.5rem;
margin-left:7rem;
font-family:"Ubuntu";
`;

const DashStyle = styled.div`
margin-left:7rem;
border-bottom: 0.4rem solid #FF9F1C;
width: 6rem;

`;

const Shop = () => {
    const [listProducts, setListProducts] = useState([]);
    const [loadData, setLoadData] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = listProducts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginar = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        (async () => {
            const productListFetch = await getProductList();
            console.log('-[Shop ProductList]- fetch >', productListFetch);
            setListProducts(productListFetch)
            setLoadData(false);
        })();
    }, [])


    return (
        <SShop>

            <Text>Produtos</Text>
            <DashStyle />
            <Prateleira
                listProducts={currentPosts}
                producstPerPage={postsPerPage}
                loadData={loadData}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={listProducts.length}
                setPage={paginar} currentPage={currentPage}
                currentPosts={currentPosts} />
        </SShop>
    );
}

export default Shop;