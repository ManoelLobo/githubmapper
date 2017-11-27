// Action Types
export const Types = {
  SHOW_MODAL: 'ui/SHOW_MODAL',
};

// Reducer
const initialState = { modal: false };
export default function ui(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { ...state, modal: !state.modal };
    default:
      return state;
  }
}

// Action Creators
export function toggleModal() {
  return {
    type: Types.SHOW_MODAL,
    payload: {},
  };
}
