import styled from 'styled-components';

const ProductStyle = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: ${props => props.width}px;
    font-size: 14px;
    text-align: center;

    .flag {
        position: absolute;
        top: 0;
        right: 0;
        width: 65px;
    }

    .image {
        display: inline-block;
        width: 100%;
        max-width: 200px;
        height: auto;
        margin: 25px 0 0;
    }

    .name {
        margin: 15px 0 10px;
        font-size: 14px;
        font-weight: normal;
        color: #7A7A7A;
        text-transform: uppercase;
    }

    .rating img {
        display: inline-block;
        height: 10px;
    }

    .price {
        margin: 0;
        font-size: 18px;
        line-height: 1.6em;
        font-weight: 700;
        color: #2EC4B6;
    }

    .price.price--old {
        margin: 5px 0 0;
        font-size: 12px;
        font-weight: normal;
        color: #7A7A7A;
        text-decoration: line-through;
    }
        
    .price.price--installments {
        font-size: 11px;
        font-weight: normal;
        color: #7A7A7A;
    }

    .button {
        display: inline-block;
        margin: 10px 0 15px;
        padding: 5px 10px;
        font-size: 14px;
        color: #ffffff;
        text-transform: uppercase;
        background-color: #2EC4B6;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        opacity: 0;

        img {
            margin-right: 5px;
        }

        img,
        span {
            display: inline-block;
            vertical-align: middle;
        }
    }

    &:hover {
        background-color: #F2F2F2;

        .button {
            opacity: 1;
        }
    }
`;

export default ProductStyle;