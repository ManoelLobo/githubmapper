// Action Types
export const Types = {
  SHOW_MODAL: 'markers/SHOW_MODAL',
  SEARCH: 'markers/SEARCH',
  ADD: 'markers/ADD',
};

// Reducer
const initialState = { markers: [], modal: false };
export default function markers(state = initialState, action) {
  switch (action.type) {
    // case Types.ADD:
    //   return [...state, action.payload.user];
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

export function addUser(username) {
  return {
    type: Types.SEARCH,
    payload: {
      username,
    },
  };
}

export function removeFavorite(id) {
  return {
    type: Types.REMOVE,
    payload: {
      id,
    },
  };
}
