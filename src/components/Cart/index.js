import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import search from '../../images/search.svg'
import './style.scss'

import { Creators as miniCartActions } from '../../redux/ducks/miniCart'
import { Creators as cartActions } from '../../redux/ducks/cart'

import { fetchFreight } from '../../api'

function Cart ({ cart, addToCart, removeFromCart, closeCart }) {
  const [zip, setZip] = useState(0)
  const [freight, setFreight] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const products = [...new Set(cart)]

  async function fnGetFreightValue (cep) {
    const response = await fetchFreight(cep)
    const freight = response.freight
    const formattedFreight = `R$ ${freight.replace('.', ',')}`
    setFreight(formattedFreight)
    fnCalculateSubtotal(freight)
  }

  function fnHandleFreightValue () {
    fnGetFreightValue(zip)
  }

  function fnHandleZipValue (value) {
    setZip(value)
  }

  function fnCalculateItemsQty (product) {
    const result = ((Number(product.price.to.integers.replace('.', '')) +
    (Number(product.price.to.decimals) / 100)) *
    cart.filter(prod => prod.id === product.id).length).toFixed(2)
    const value = result.toString().replace('.', ',')
    return `R$ ${value}`
  }

  function fnCalculateSubtotal (freight) {
    const values = cart.map(product => (Number(product.price.to.integers.replace('.', '')) +
    (Number(product.price.to.decimals) / 100)).toFixed(2))

    const subtotal = values.reduce((subtotal, current) => Number(current) + Number(subtotal), 0)
    const total = subtotal + Number(freight.toString().replace('R$ ', '').replace(',', '.'))
    const formattedTotal = `R$ ${total.toFixed(2).replace('.', ',')}`

    setSubtotal(formattedTotal)
  }

  useEffect(() => {
    fnCalculateSubtotal(freight)
  }, [cart])

  return (
    <>
    <section className="cart">
      <section className="cart__title">
        <span id="closeCart" onClick={() => closeCart()}>X</span>
        <h2>Produtos no carrinho</h2>
      </section>
      <section className="cart__shipping cart__shipping--zip">
        <input type="text" name="shipping" id="shipping" placeholder="Calcular CEP" onChange={event => fnHandleZipValue(event.target.value)} />
        <img src={search} alt="Calcular frete" onClick={() => fnHandleFreightValue()} />
      </section>
      <section className="cart__wrapper">
        {products.length > 0 ? products.map(product => (
          <section className={product.price.from ? 'cart__product promo' : 'cart__product'} key={product.id}>
            <figure className="cart__image">
              <img src={product.picture} alt={product.name} />
            </figure>
            <div className="cart__controls">
              <p className="cart__name">{product.name}</p>
              <div className="cart__group">
                <span className="cart__code">Cód.: {product.id}</span>
                <div className="cart__quantity">
                  <button className="decrease" onClick={() => removeFromCart(product.id)}>-</button>
                  <input type="text" className="qty" readOnly value={cart.filter(prod => prod.id === product.id).length} />
                  <button className="increase" onClick={() => addToCart(product)}>+</button>
                </div>
              </div>
              <div className="cart__price">
                <p>
                  <span>1 un.</span>
                  {product.price.from && `R$ ${product.price.from.integers},${product.price.from.decimals}`}
                </p>
                <p>
                  <span>1 un.</span>
                  {`R$ ${product.price.to.integers},${product.price.to.decimals}`}
                </p>
                <p>
                  <span>{cart.filter(prod => prod.id === product.id).length} un.</span>
                  {fnCalculateItemsQty(product)}
                </p>
              </div>
            </div>
          </section>
        )) : <h2>Carrinho vazio</h2>
        }
      </section>
      <section className="cart__shipping cart__shipping--value">
        <h3>Frete:</h3>
        <p>{freight}</p>
      </section>
      <section className="cart__subtotal">
        <h3>Subtotal:</h3>
        <p>{subtotal}</p>
      </section>
      <button className="cart__buy">Ir para o carrinho</button>
    </section>
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.array,
  closeCart: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func
}

const mapStateToProps = (state) => ({ cart: state.cart })
const mapDispatchToProps = dispatch => bindActionCreators({ ...miniCartActions, ...cartActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
