import styled from 'styled-components';

const AddressStyle = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 50%;
    color: #ffffff;

    h6 {
        margin: 0;
        font-size: 14px;
        line-height: 1.6em;
    }

    p {
        margin: 0;
        font-size: 12px;
        line-height: 1.6em;
    }
    
    @media (min-width: 940px) {
        margin-right: 40px;
        width: auto;

        h6 {
            font-size: 16px;
        }
        
        p {
            font-size: 14px;
        }
        
        &:last-child {
            margin-right: 0;
        }
    }
`;

export default AddressStyle;