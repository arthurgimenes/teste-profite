import styled from 'styled-components';

const ProductsStyle = styled.div`
    position: relative;
    padding: 25px 0;

    .wrapper {
        position: relative;
        max-width: 1240px;
        height: 100%;
        margin: 0 auto;
        padding: 0 40px;
    }

    .title {
        margin: 0 0 20px;
        font-size: 20px;
        font-weight: 700;
        color: #011627;
    }

    .title:after {
        content: '';
        display: block;
        width: 65px;
        height: 4px;
        margin: 10px 0 0;
        background-color: #FF9F1C;
    }
        
`;

export default ProductsStyle;