// Action Types
export const Types = {
  ADD: 'markers/ADD',
  SEARCH: 'markers/SEARCH',
};

// Reducer
const initialState = [];
export default function markers(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case Types.ADD:
      return [
        ...state,
        { ...action.payload },
      ];
    default:
      return state;
  }
}

// Action Creators
export function addMarker(username, coord) {
  return {
    type: Types.SEARCH,
    payload: {
      username,
      coord,
    },
  };
}
