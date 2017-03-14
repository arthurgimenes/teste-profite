import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <form className="header-search" action={this.props.action} method={this.props.method}>
                   <button className="button" type="submit"></button>
                   <input className="input" name={this.props.inputName} type="search" placeholder={this.props.placeholder} />
               </form>
    }
}

Search.defaultProps = {
    inputName: 'query',
    action: '/',
    method: 'get',
    placeholder: 'search...'
}

export default Search