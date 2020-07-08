import { takeLatest, put, call, all } from 'redux-saga/effects'

import { Types } from '../ducks/product'
import { fetchProducts } from '../../api'

function* fnRequestProductList() {
  try {
    const products = yield call(fetchProducts)
    yield put({ type: Types.RECEIVE_PRODUCTS, products })
  } catch (error) {
    yield put({ type: Types.FAILURE_PRODUCTS })
  }
}

export default function* root() {
  return yield all([
    yield takeLatest(Types.REQUEST_PRODUCTS, fnRequestProductList)
  ])
}
