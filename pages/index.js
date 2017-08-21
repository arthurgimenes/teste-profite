
import React from 'react'
import Link from 'next/link'
import ProductList from '../components/ProductList'
import Header from '../components/Header'
import 'isomorphic-fetch'

import stylesheet from 'styles/index.sass'

export default class IndexPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://demo1457614.mockable.io/products')
    const json = await res.json()
    return { productList: json.products }
  }

  render () {
    const products = this.props.productList;
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />


        <Header />
        <ProductList products={products} />
      </div>
    )
  }
}
