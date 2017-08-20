
import React from 'react'
import Link from 'next/link'
import ProductList from '../components/ProductList'
import 'isomorphic-fetch'

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
        <ProductList products={products} />
      </div>
    )
  }
}
