export const Types = {
  ADD: 'cart/ADD_TO_CART',
  REMOVE: 'cart/REMOVE_FROM_CART'
}

const INITIAL_STATE = []

export default function cart(state = INITIAL_STATE, action) {
  const index = state.findIndex(product => product.id === action.id)
  const filtered = state.filter((product, idx) => idx !== index)
  switch (action.type) {
    case Types.ADD:
      return [
        ...state,
        action.product
      ]
    case Types.REMOVE:
      return filtered
    default: return state
  }
}

export const Creators = {
  addToCart: product => ({
    type: Types.ADD,
    product
  }),
  removeFromCart: id => ({
    type: Types.REMOVE,
    id
  })
}
