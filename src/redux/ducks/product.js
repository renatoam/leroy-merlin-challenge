export const Types = {
  REQUEST_PRODUCTS: 'products/request',
  RECEIVE_PRODUCTS: 'products/receive',
  FAILURE_PRODUCTS: 'products/failure'
}

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
}

export default function products (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_PRODUCTS:
      return { ...state, loading: true }
    case Types.RECEIVE_PRODUCTS:
      return { data: action.products, loading: false, error: false }
    case Types.FAILURE_PRODUCTS:
      return { data: [], loading: false, error: true }
    default: return state
  }
}

export const Creators = {
  requestProducts: () => ({
    type: Types.REQUEST_PRODUCTS
  }),
  receiveProducts: products => ({
    type: Types.RECEIVE_PRODUCTS,
    products
  })
}
