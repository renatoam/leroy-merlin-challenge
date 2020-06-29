import { combineReducers } from 'redux'

import cart from './cart'
import product from './product'
import message from './message'
import miniCart from './miniCart'

export default combineReducers({
  cart, product, miniCart, message
})
