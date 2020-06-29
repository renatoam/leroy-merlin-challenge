import { takeLatest, put, call, select } from 'redux-saga/effects'

import { Types } from '../ducks/product'
import { fetchProducts } from '../../api'

function * fnRequestProductList () {
  console.log('Entrou no Watcher')
  try {
    yield select(state => console.log('state', state))
    const products = yield call(fetchProducts)
    console.log('Products', products)
    yield put({ type: Types.RECEIVE_PRODUCTS, products })
  } catch (error) {
    yield put({ type: Types.FAILURE_PRODUCTS })
  }
}

export default function * root () {
  yield [
    takeLatest(Types.REQUEST_PRODUCTS, fnRequestProductList)
  ]
}
