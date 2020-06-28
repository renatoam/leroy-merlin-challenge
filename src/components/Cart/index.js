/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import productImage from '../../images/product-placeholder.png'
import search from '../../images/search.svg'
import './style.scss'

export default function Cart () {
  return (
    <>
    <section className="cart">
      <section className="cart__title">
        <span id="closeCart">X</span>
        <h2>Produtos no carrinho</h2>
      </section>
      <section className="cart__shipping cart__shipping--zip">
        <input type="text" name="shipping" id="shipping" placeholder="Calcular CEP" />
        <img src={search} alt="Calcular frete"/>
      </section>
      <section className="cart__wrapper">
        <section className="cart__product">
          <figure className="cart__image">
            <img src={productImage} alt="Nome do produto"/>
          </figure>
          <div className="cart__controls">
            <p className="cart__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <div className="cart__group">
              <span className="cart__code">Cód.: 89031824</span>
              <div className="cart__quantity">
                <button className="decrease">-</button>
                <input type="text" className="qty"/>
                <button className="increase">+</button>
              </div>
            </div>
            <div className="cart__price">
              <p><span>1 un.</span>R$ 119,90</p>
              <p><span>1 un.</span>R$ 119,90</p>
              <p><span>1 un.</span>R$ 119,90</p>
            </div>
          </div>
        </section>
        <section className="cart__product promo">
          <figure className="cart__image">
            <img src={productImage} alt="Nome do produto"/>
          </figure>
          <div className="cart__controls">
            <p className="cart__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <div className="cart__group">
              <span className="cart__code">Cód.: 89031824</span>
              <div className="cart__quantity">
                <button className="decrease">-</button>
                <input type="text" className="qty"/>
                <button className="increase">+</button>
              </div>
            </div>
            <div className="cart__price">
              <p><span>1 un.</span>R$ 69,90</p>
              <p><span>1 un.</span>R$ 599,90</p>
              <p><span>1 un.</span>R$ 599,90</p>
            </div>
          </div>
        </section>
      </section>
      <section className="cart__shipping cart__shipping--value">
        <h3>Frete:</h3>
        <p>R$ 1275,90</p>
      </section>
      <section className="cart__subtotal">
        <h3>Subtotal:</h3>
        <p>R$ 1275,90</p>
      </section>
      <button className="cart__buy">Ir para o carrinho</button>
    </section>
    </>
  )
}
