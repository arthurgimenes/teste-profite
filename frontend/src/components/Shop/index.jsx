import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Prateleira from './Prateleira';
import Pagination from './Pagination';
import { getProductList } from '../../services/getData';
import Media from 'react-media';

const SShop = styled.div`
height:auto;
max-width:1200px;
width:95%;

`;
const Text = styled.h1`
color:#000;
font-size:3rem;
font-style: normal;
font-weight: bold;
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
    const [postsPerPage, setPostsPerPage] = useState(4);

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

    function resetQtdItemsPerPage(et) {
        setPostsPerPage(et)
        return et;
    }


    return (
        <SShop>

            <Text>Produtos</Text>
            <DashStyle />
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 999px)",
                large: "(min-width: 1000px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small &&
                            < Prateleira
                                listProducts={currentPosts}
                                producstPerPage={resetQtdItemsPerPage(2)}
                                loadData={loadData}
                            />
                        }
                        {matches.medium &&

                            < Prateleira
                                listProducts={currentPosts}
                                producstPerPage={resetQtdItemsPerPage(3)}
                                loadData={loadData}
                            />
                        }
                        {matches.large &&
                            < Prateleira
                                listProducts={currentPosts}
                                producstPerPage={resetQtdItemsPerPage(4)}
                                loadData={loadData}
                            />
                        }
                    </Fragment>
                )}
            </Media>

            {loadData ? <></> :
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={listProducts.length}
                    setPage={paginar} currentPage={currentPage}
                    currentPosts={currentPosts} />
            }
        </SShop>
    );
}

export default Shop;