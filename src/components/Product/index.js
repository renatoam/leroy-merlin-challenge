/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropType from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as cartActions } from '../../redux/ducks/cart'
import { Creators as messageActions } from '../../redux/ducks/message'
import './style.scss'

function Product ({ products, addToCart, openMessage, closeMessage }) {
  function fnHandleAddToCart (product) {
    addToCart(product)
    openMessage()

    setTimeout(() => {
      closeMessage()
    }, 4000)
  }

  return (
    <>
    {products.map(product => (
      <section key={product.id} className={product.price.from ? 'product promo' : 'product'} data-id={product.id}>
        <section className="product__wrapper">
          <a href={product.url}>
            <figure className="product__image">
              <img src={product.picture} alt={product.name}/>
              {product.tag && <span className="product__tag">{product.tag.label}</span>}
              {product.offer && <span className="product__offer"><small>{product.offer.label}</small><small>{`-${product.offer.value}%`}</small></span>}
            </figure>
          </a>
          <p className="product__name">{product.name}</p>
          <button className="product__button" onClick={() => fnHandleAddToCart(product)}>Adicionar ao carrinho</button>
          <div className="product__price">
            {product.price.from ? <>
              <p className="product__promo">{`R$ ${product.price.to.integers},${product.price.to.decimals}`}<small className="unit">{product.unit}</small></p>
              <p className="product__current">{`R$ ${product.price.from.integers},${product.price.from.decimals}`}<small className="unit">{product.unit}</small></p>
              </> : <p className="product__current">{`R$ ${product.price.to.integers},${product.price.to.decimals}`}<small className="unit">{product.unit}</small></p>
            }
            {product.installments && <p className="product__installment"><strong>{`${product.installments.amount}x`}</strong> de <strong>{`R$ ${product.installments.value}`} </strong>s/juros</p>}
          </div>
        </section>
      </section>
    ))}
    </>
  )
}

Product.propTypes = {
  products: PropType.array,
  addToCart: PropType.func,
  openMessage: PropType.func,
  closeMessage: PropType.func
}

// aqui, por enquanto, só o que vale é a prop 'product', porque o state.product ainda não existe
const mapStateToProps = (state, { products }) => ({ temp: state.product, products })
const mapDispatchToProps = dispatch => bindActionCreators({ ...cartActions, ...messageActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Product)
