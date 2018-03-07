import markersReducer, * as actions from 'redux/ducks/markers';

const initialState = [
  { user: { id: 1 }, coord: { latitude: 1, longitude: 1 } },
];

describe('Testing markers reducer', () => {
  it('adds an item to the state', () => {
    const actionToAdd = {
      type: actions.Types.ADD,
      payload: { user: { id: 2 }, coord: { latitude: 1, longitude: 1 } },
    };

    const state = markersReducer(initialState, actionToAdd);

    expect(state).toHaveLength(2);
    expect(state).toContainEqual(actionToAdd.payload);
  });

  it('passes unchanged state if action or type does not exist', () => {
    let state = markersReducer(initialState);
    state = markersReducer(initialState, { type: 'ERROR!' });

    expect(state).toEqual(initialState);
  });

  it('initializes state as empty array if ommited', () => {
    const state = markersReducer(undefined, { type: null });

    expect(state).toEqual([]);
  });
});
