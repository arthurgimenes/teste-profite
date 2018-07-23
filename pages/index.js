
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ProductList from '../components/ProductList'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
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
        <Head>
          <title>TGT | Nathalia Bruno | Technos Group Test</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />


        <Header />
        <Banner />
        <ProductList products={products} />

        <Footer />
      </div>
    )
  }
}
