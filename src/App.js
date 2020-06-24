import React from 'react'
import logo from './images/logo.svg'
import cart from './images/cart.svg'
import product from './images/product-placeholder.png'

const App = () => (
  <>
    <main className="leroy">
      <header className="leroy__header">
        <figure className="leroy__header-column">
          <img className="leroy__logo" src={logo} width={50} height={50} data-testid="logo" alt="Logo Leroy Merlin" />
        </figure>
        <figure className="leroy__header-column">
          <img src={cart} alt="Carrinho"/>
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
    </main>
  </>
)

export default App
