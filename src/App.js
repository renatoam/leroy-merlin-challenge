/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import logo from './images/logo.svg'
import product from './images/product-placeholder.png'

const App = () => (
  <>
    <main className="leroy">
      <header className="header">
        <figure className="header__column header__column--logo">
          <a href="/"><h1><img className="header__logo" src={logo} data-testid="logo" alt="Logo Leroy Merlin" /></h1></a>
          <h2>Os melhores produtos</h2>
        </figure>
        <figure className="header__column header__column--icon">
          <svg enableBackground="new 0 0 300 300" version="1.1" viewBox="0 0 300 300" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="M206.4,200H21.7C11.6,200,2,190.7,2,180.9V75.3c0-9.5,8.5-17.5,18.5-17.6l240.4-12.3L206.4,200z M21.8,182h171.8L235,64.9  L21,76h-0.2c-0.3,0-0.6-0.2-0.8-0.1v104.5C20.3,181.1,21.3,181.8,21.8,182z"/>
            <rect x="48.5" y="211" width="113.5" height="18"/>
            <path d="m49.2 294c-22.9 0-41.6-18.6-41.6-41.6 0-22.9 18.6-41.6 41.6-41.6s41.6 18.6 41.6 41.6-18.7 41.6-41.6 41.6zm0-65.1c-13 0-23.6 10.6-23.6 23.6s10.6 23.5 23.6 23.5 23.6-10.6 23.6-23.6-10.6-23.5-23.6-23.5z"/>
            <path d="m163.3 294c-22.9 0-41.6-18.6-41.6-41.6 0-22.9 18.6-41.6 41.6-41.6 22.9 0 41.6 18.6 41.6 41.6s-18.7 41.6-41.6 41.6zm0-65.1c-13 0-23.6 10.6-23.6 23.6s10.6 23.6 23.6 23.6 23.6-10.6 23.6-23.6-10.6-23.6-23.6-23.6z"/>
            <polygon points="254.7 61.4 238.1 54.5 258.2 6 300 6 300 24 270.2 24"/>
          </svg>
          <span className="qty"></span>
        </figure>
      </header>

      <section className="leroy__wrapper">
        <a href="{product.url}" className="product" data-id="{product.id}">
          <section className="product__wrapper">
            <figure className="product__image">
              <img src={product} alt="Nome do produto"/>
              <span className="product__tag">Exclusividade</span>
              <span className="product__offer"><small>Oferta</small><small>10%</small></span>
            </figure>
            <p className="product__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <button className="product__button">Adicionar ao carrinho</button>
            <div className="product__price">
              <p className="product__promo">R$ 10.183,90<small className="unit">cada</small></p>
              <p className="product__current">R$ 169,90<small className="unit">cada</small></p>
              <p className="product__installment"><strong>10x</strong> de <strong>R$ 8.009,90 </strong>s/juros</p>
            </div>
          </section>
        </a>
        <a href="{product.url}" className="product promo" data-id="{product.id}">
          <section className="product__wrapper">
            <figure className="product__image">
              <img src={product} alt="Nome do produto"/>
              <span className="product__tag"></span>
              <span className="product__offer"><small>Oferta</small><small>10%</small></span>
            </figure>
            <p className="product__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <button className="product__button">Adicionar ao carrinho</button>
            <div className="product__price">
              <p className="product__promo">R$ 10.183,90<small className="unit">cada</small></p>
              <p className="product__current">R$ 169,90<small className="unit">cada</small></p>
              <p className="product__installment"><strong>10x</strong> de <strong>R$ 8.009,90 </strong>s/juros</p>
            </div>
          </section>
        </a>
        <a href="{product.url}" className="product" data-id="{product.id}">
          <section className="product__wrapper">
            <figure className="product__image">
              <img src={product} alt="Nome do produto"/>
              <span className="product__tag"></span>
              <span className="product__offer"><small>Oferta</small><small>10%</small></span>
            </figure>
            <p className="product__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <button className="product__button">Adicionar ao carrinho</button>
            <div className="product__price">
              <p className="product__promo">R$ 10.183,90<small className="unit">cada</small></p>
              <p className="product__current">R$ 169,90<small className="unit">cada</small></p>
              <p className="product__installment"><strong>10x</strong> de <strong>R$ 8.009,90 </strong>s/juros</p>
            </div>
          </section>
        </a>
        <a href="{product.url}" className="product" data-id="{product.id}">
          <section className="product__wrapper">
            <figure className="product__image">
              <img src={product} alt="Nome do produto"/>
              <span className="product__tag"></span>
              <span className="product__offer"><small>Oferta</small><small>10%</small></span>
            </figure>
            <p className="product__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <button className="product__button">Adicionar ao carrinho</button>
            <div className="product__price">
              <p className="product__promo">R$ 10.183,90<small className="unit">cada</small></p>
              <p className="product__current">R$ 169,90<small className="unit">cada</small></p>
              <p className="product__installment"><strong>10x</strong> de <strong>R$ 8.009,90 </strong>s/juros</p>
            </div>
          </section>
        </a>
        <a href="{product.url}" className="product" data-id="{product.id}">
          <section className="product__wrapper">
            <figure className="product__image">
              <img src={product} alt="Nome do produto"/>
              <span className="product__tag"></span>
              <span className="product__offer"><small>Oferta</small><small>10%</small></span>
            </figure>
            <p className="product__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <button className="product__button">Adicionar ao carrinho</button>
            <div className="product__price">
              <p className="product__promo">R$ 10.183,90<small className="unit">cada</small></p>
              <p className="product__current">R$ 169,90<small className="unit">cada</small></p>
              <p className="product__installment"><strong>10x</strong> de <strong>R$ 8.009,90 </strong>s/juros</p>
            </div>
          </section>
        </a>
        <a href="{product.url}" className="product" data-id="{product.id}">
          <section className="product__wrapper">
            <figure className="product__image">
              <img src={product} alt="Nome do produto"/>
              <span className="product__tag"></span>
              <span className="product__offer"><small>Oferta</small><small>10%</small></span>
            </figure>
            <p className="product__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <button className="product__button">Adicionar ao carrinho</button>
            <div className="product__price">
              <p className="product__promo">R$ 10.183,90<small className="unit">cada</small></p>
              <p className="product__current">R$ 169,90<small className="unit">cada</small></p>
              <p className="product__installment"><strong>10x</strong> de <strong>R$ 8.009,90 </strong>s/juros</p>
            </div>
          </section>
        </a>
        <a href="{product.url}" className="product" data-id="{product.id}">
          <section className="product__wrapper">
            <figure className="product__image">
              <img src={product} alt="Nome do produto"/>
              <span className="product__tag"></span>
              <span className="product__offer"><small>Oferta</small><small>10%</small></span>
            </figure>
            <p className="product__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <button className="product__button">Adicionar ao carrinho</button>
            <div className="product__price">
              <p className="product__promo">R$ 10.183,90<small className="unit">cada</small></p>
              <p className="product__current">R$ 169,90<small className="unit">cada</small></p>
              <p className="product__installment"><strong>10x</strong> de <strong>R$ 8.009,90 </strong>s/juros</p>
            </div>
          </section>
        </a>
        <a href="{product.url}" className="product" data-id="{product.id}">
          <section className="product__wrapper">
            <figure className="product__image">
              <img src={product} alt="Nome do produto"/>
              <span className="product__tag"></span>
              <span className="product__offer"><small>Oferta</small><small>10%</small></span>
            </figure>
            <p className="product__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
            <button className="product__button">Adicionar ao carrinho</button>
            <div className="product__price">
              <p className="product__promo">R$ 10.183,90<small className="unit">cada</small></p>
              <p className="product__current">R$ 169,90<small className="unit">cada</small></p>
              <p className="product__installment"><strong>10x</strong> de <strong>R$ 8.009,90 </strong>s/juros</p>
            </div>
          </section>
        </a>
      </section>

      <section className="leroy__cart">
        <section className="cart">
          <section className="cart__title">
            <h2>Meus produtos</h2>
          </section>
          <section className="cart__shipping cart__shipping--zip">
            <h3>Calcular frete:</h3>
            <div className="shipping-group">
              <input type="text" name="shipping" id="shipping"/>
              <button>Ok</button>
            </div>
          </section>
          <section className="cart__wrapper">
            <section className="cart__product">
              <figure className="cart__image">
                <img src={product} alt="Nome do produto"/>
              </figure>
              <div className="cart__controls">
                <p className="cart__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
                <div className="cart__quantity">
                  <button className="decrease">-</button>
                  <input type="text" className="qty"/>
                  <button className="increase">+</button>
                </div>
                <p className="cart__price">R$ 101,00</p>
              </div>
            </section>
            <section className="cart__product">
              <figure className="cart__image">
                <img src={product} alt="Nome do produto"/>
              </figure>
              <div className="cart__controls">
                <p className="cart__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
                <div className="cart__quantity">
                  <button className="decrease">-</button>
                  <input type="text" className="qty"/>
                  <button className="increase">+</button>
                </div>
                <p className="cart__price">R$ 101,00</p>
              </div>
            </section>
            <section className="cart__product">
              <figure className="cart__image">
                <img src={product} alt="Nome do produto"/>
              </figure>
              <div className="cart__controls">
                <p className="cart__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
                <div className="cart__quantity">
                  <button className="decrease">-</button>
                  <input type="text" className="qty"/>
                  <button className="increase">+</button>
                </div>
                <p className="cart__price">R$ 101,00</p>
              </div>
            </section>
            <section className="cart__product">
              <figure className="cart__image">
                <img src={product} alt="Nome do produto"/>
              </figure>
              <div className="cart__controls">
                <p className="cart__name">Parafusadeira/Furadeira 3/8" 8V LD008-BR Bivolt Black</p>
                <div className="cart__quantity">
                  <button className="decrease">-</button>
                  <input type="text" className="qty"/>
                  <button className="increase">+</button>
                </div>
                <p className="cart__price">R$ 101,00</p>
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
          <button className="cart__buy">Comprar</button>
        </section>
      </section>
    </main>
  </>
)

export default App
