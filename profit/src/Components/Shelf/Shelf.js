
import React from 'react'
import Title from '../Title/Title'
import Product from './Product'

const Shelf = () => {
  return(
    <section className="shelf">
    <div className="container">
      <Title title="Produtos"  color='#011627' />
      <Product/>
    </div>
  </section>
  )
}

export default Shelf;