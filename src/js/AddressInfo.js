import React from 'react'

class AddressInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="address-info">
                <i className={`icon-${this.props.icon}`}></i>
                <div className="infosgroup">
                    <div className="item">
                        {this.props.street}
                    </div>
                    <div className="item">
                        {this.props.neighborhood}
                    </div>
                    <div className="item phone">{this.props.phone}</div>
                </div>
            </div>
        )
    }
}

export default AddressInfo