import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import { bindActionCreators } from 'redux'

import Header from './components/Header'
import Product from './components/Product'
import Cart from './components/Cart'

import { Creators as actions } from './redux/ducks/product'

const App = ({ cart, products, miniCart, requestProducts }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      requestProducts()
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw new Error('Algo deu errado no carregamento dos produtos!')
    }
  }, [])

  console.log('products', products)

  return (
    <main className="leroy">
      <Header />
      <section className="leroy__wrapper">
        { loading ? <h2>Carregando lista de produtos...</h2> : <Product products={products} /> }
      </section>
      <section className={miniCart.open ? 'leroy__cart open' : 'leroy__cart'}>
        <Cart cart={cart} />
      </section>
    </main>
  )
}

App.propTypes = {
  cart: PropType.array,
  miniCart: PropType.object,
  requestProducts: PropType.func,
  products: PropType.array
}

const mapStateToProps = state => ({ cart: state.cart, miniCart: state.miniCart, products: state.products.data })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
