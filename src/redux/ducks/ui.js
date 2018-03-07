// Action Types
export const Types = {
  MODAL_TOGGLE: 'ui/MODAL_TOGGLE',
  LAST_COORD: 'ui/LAST_COORD',
  MESSAGE: 'ui/MESSAGE',
};

// Reducer
const initialState = {
  modal: false,
  lastCoord: {},
  message: '',
};

export default function ui(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case Types.MODAL_TOGGLE:
      return { ...state, modal: !state.modal };
    case Types.LAST_COORD:
      return { ...state, lastCoord: action.payload.coord };
    case Types.MESSAGE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
}

// Action Creators
export function toggleModal() {
  return {
    type: Types.MODAL_TOGGLE,
    payload: {},
  };
}

export function setCoord(coord) {
  return {
    type: Types.LAST_COORD,
    payload: { coord },
  };
}

export function setMessage(message) {
  return {
    type: Types.MESSAGE,
    payload: { message },
  };
}
