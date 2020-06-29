import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'

import Header from './components/Header'
import Product from './components/Product'
import Cart from './components/Cart'

const App = ({ cart, miniCart }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchURL = 'https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev/products'

  useEffect(() => {
    async function fnGetProductList () {
      setLoading(true)
      try {
        // eslint-disable-next-line no-undef
        const response = await fetch(fetchURL).then(response => response.json()).then(json => {
          setLoading(false)
          return json
        })
        setProducts(response)
      } catch (error) {
        throw new Error('Algo deu errado no carregamento dos produtos!')
      }
    }

    fnGetProductList()
  }, [])

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
  miniCart: PropType.object
}

const mapStateToProps = state => ({ cart: state.cart, miniCart: state.miniCart })

export default connect(mapStateToProps)(App)
