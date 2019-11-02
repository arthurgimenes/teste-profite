import React from 'react';

import AddressStyle from './styles';

class Address extends React.Component {

    render() {
        return (
            <AddressStyle>
                {this.props.children}
            </AddressStyle>
        );
    }

}

export default Address;