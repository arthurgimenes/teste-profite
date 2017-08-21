
import React from 'react'
import Link from 'next/link'
import ProductList from '../components/ProductList'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import 'isomorphic-fetch'

import stylesheet from 'styles/index.sass'

export default class IndexPage extends React.Component {
  // static async getInitialProps () {
  //   // eslint-disable-next-line no-undef
  //   const res = await fetch('https://demo1457614.mockable.io/products')
  //   const json = await res.json()
  //   return { productList: json.products }
  // }

  

  render () {
    // const products = this.props.productList;

    const products = [
        {
          "SKU": "8006",
          "name": "Sandália Ferracini Ecologic",
          "price_old": "",
          "price": "95,92",
          "price_splitted": "4x de R$ 23,98",
          "image_url": "/static/image/products/product_8006.png",
          "zoom_image": "/static/image/products/product_8006_zoom.png"
        },
        {
          "SKU": "8119",
          "name": "Chinelo Kildare",
          "price_old": "99,90",
          "price": "79,92",
          "price_splitted": "3x de R$ 26,64",
          "image_url": "/static/image/products/product_8119.png",
          "zoom_image": "/static/image/products/product_8119_zoom.png"
        },
        {
          "SKU": "8823",
          "name": "Tênis Ferracini Week",
          "price_old": "229,90",
          "price": "183,92",
          "price_splitted": "9x de R$ 20,43",
          "image_url": "/static/image/products/product_8823.png",
          "zoom_image": "/static/image/products/product_8823_zoom.png"
        },
        {
          "SKU": "8873",
          "name": "Tênis Democrata Fan",
          "price_old": "219,90",
          "price": "159,92",
          "price_splitted": "7x de R$ 22,84",
          "image_url": "/static/image/products/product_8873.png",
          "zoom_image": "/static/image/products/product_8873_zoom.png"
        }
      ]
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />


        <Header />
        <Banner />
        <ProductList products={products} />

        <Footer />
      </div>
    )
  }
}
