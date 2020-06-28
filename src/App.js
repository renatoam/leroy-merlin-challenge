import React from 'react'

import Header from './components/Header'
import Product from './components/Product'
import Cart from './components/Cart'

const App = () => (
  <>
    <main className="leroy">
      <Header />
      <section className="leroy__wrapper">
        <Product />
      </section>
      <section className="leroy__cart">
        <Cart />
      </section>
    </main>
  </>
)

export default App
