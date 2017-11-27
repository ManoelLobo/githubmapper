// Action Types
export const Types = {
  ADD: 'markers/ADD',
  SEARCH: 'markers/SEARCH',
};

// Reducer
const initialState = [];
export default function markers(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return [
        ...state,
        action.payload.user,
      ];
    default:
      return state;
  }
}

// Action Creators
export function addUser(username) {
  return {
    type: Types.SEARCH,
    payload: {
      username,
    },
  };
}
