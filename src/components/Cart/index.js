import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import search from '../../images/search.svg'
import './style.scss'

import { Creators as miniCartActions } from '../../redux/ducks/miniCart'
import { Creators as cartActions } from '../../redux/ducks/cart'

import { fetchFreight } from '../../api'

function Cart({ cart, addToCart, removeFromCart, closeCart }) {
  const [zip, setZip] = useState(0)
  const [freight, setFreight] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const products = [...new Set(cart)]

  function fnGetFreightValue() {
    fetchFreight(zip).then(response => {
      const freight = Number(response.freight)
      setFreight(freight)
      fnCalculateSubtotal()
    })
  }

  function fnFormatToMoney(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  function fnJoinPrice(product, src = 'to') {
    return product.price[src]
  }

  function fnGetPrice(product, src = 'to') {
    const value = fnJoinPrice(product)
    const priceInteger = Number(value.integers.replace('.', ''))
    const priceDecimal = (Number(value.decimals) / 100)
    const price = priceInteger + priceDecimal
    return price
  }

  function fnCalculateItemsQty(product) {
    const price = fnGetPrice(product)
    const qtyProduct = cart.filter(prod => prod.id === product.id).length
    const result = price * qtyProduct
    return fnFormatToMoney(result)
  }

  function fnCalculateSubtotal() {
    const values = cart.map(product => fnGetPrice(product).toFixed(2))
    const subtotal = values.reduce((subtotal, current) => Number(current) + Number(subtotal), 0)
    const total = subtotal + freight
    const formattedTotal = fnFormatToMoney(total)
    setSubtotal(formattedTotal)
  }

  function fnHandleAddToCart(product) {
    const qtyOfItemsInCart = cart.filter(prod => prod.id === product.id).length

    if (qtyOfItemsInCart >= 10) {
      window.alert('Máximo permitido de 10 itens por produto!')
      return
    }

    addToCart(product)
  }

  function fnHandleRemoveFromCart(product) {
    const qtyOfItemsInCart = cart.filter(prod => prod.id === product.id).length

    if (qtyOfItemsInCart === 0) return

    removeFromCart(product.id)
  }

  function fnHandleCloseCart() {
    closeCart()
    document.body.classList.remove('noscroll')
  }

  useEffect(() => {
    fnCalculateSubtotal(freight)
  }, [cart, freight])

  return (
    <>
    <section className="cart">
      <section className="cart__title">
        <span id="closeCart" onClick={() => fnHandleCloseCart()}>X</span>
        <h2>Produtos no carrinho</h2>
      </section>
      <section className="cart__shipping cart__shipping--zip">
        <input type="text" name="shipping" id="shipping" placeholder="Calcular CEP" onChange={event => setZip(event.target.value)} />
        <img src={search} alt="Calcular frete" onClick={() => fnGetFreightValue()} />
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
                  <button className="decrease" onClick={() => fnHandleRemoveFromCart(product)}>-</button>
                  <input type="text" className="qty" readOnly value={cart.filter(prod => prod.id === product.id).length} />
                  <button className="increase" onClick={() => fnHandleAddToCart(product)}>+</button>
                </div>
              </div>
              <div className="cart__price">
                <p>
                  {/* <span>1 un.</span> */}
                  {product.price.from && fnFormatToMoney(fnGetPrice(product, 'from'))}
                </p>
                <p>
                  {/* <span>1 un.</span> */}
                  {fnFormatToMoney(fnGetPrice(product, 'from'))}
                </p>
                <p>
                  {/* <span>{cart.filter(prod => prod.id === product.id).length} un.</span> */}
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
        <p>{`R$ ${freight}`}</p>
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
