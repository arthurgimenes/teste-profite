import React from 'react';

import Header from './components/header/header'
import Principal from './components/principal/principal';
import Produtos from './components/produtos/produtos';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Principal />
      <Produtos />
      <Footer />
    </>
  );
}

export default App;
