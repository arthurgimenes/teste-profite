import React from 'react'
import axios from 'axios'

import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import ProductList from './ProductList'
import ProductListModal from './ProductListModal'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <Header />
                <Banner />
                <ProductList />
                <Footer />
                <ProductListModal />
            </div>
        )
    }
}

export default App