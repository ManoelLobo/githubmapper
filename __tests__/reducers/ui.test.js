import uiReducer, * as actions from 'redux/ducks/ui';

const initialState = {
  modal: false,
  lastCoord: {},
  message: '',
};

describe('Testing ui reducer', () => {
  it('can toggle modal', () => {
    const state = uiReducer(initialState, actions.toggleModal());

    expect(state.modal).toBe(!initialState.modal);
  });

  it('can save last coord', () => {
    const testCoord = { latitude: 1, longitude: 1 };
    const state = uiReducer(initialState, actions.setCoord(testCoord));

    expect(state.lastCoord).toEqual(testCoord);
  });

  it('can set a message', () => {
    const state = uiReducer(initialState, actions.setMessage('MESSAGE'));

    expect(state.message).toEqual('MESSAGE');
  });

  it('passes unchanged state if action or type does not exist', () => {
    let state = uiReducer(initialState);
    state = uiReducer(initialState, { type: 'ERROR!!' });

    expect(state).toEqual(initialState);
  });

  it('initializes state as empty array if ommited', () => {
    const state = uiReducer(undefined, { type: null });

    expect(state).toEqual(initialState);
  });
});
