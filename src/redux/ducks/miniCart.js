export const Types = {
  OPEN: 'cart/openCart',
  CLOSE: 'cart/closeCart'
}

const INITIAL_STATE = { open: false }

export default function miniCart (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { open: true }
    case Types.CLOSE:
      return { open: false }
    default: return state
  }
}

export const Creators = {
  openCart: () => ({ type: Types.OPEN }),
  closeCart: () => ({ type: Types.CLOSE })
}
