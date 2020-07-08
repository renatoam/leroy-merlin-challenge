export const Types = {
  OPEN: 'message/openMessage',
  CLOSE: 'message/closeMessage'
}

const INITIAL_STATE = { open: false }

export default function message(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { open: true }
    case Types.CLOSE:
      return { open: false }
    default: return state
  }
}

export const Creators = {
  openMessage: () => ({ type: Types.OPEN }),
  closeMessage: () => ({ type: Types.CLOSE })
}
