import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import api from 'services/api';
import rootSaga from 'redux/sagas';
import * as markerActions from 'redux/ducks/markers';
import { Types as UITypes } from 'redux/ducks/ui';

const errorAction = {
  type: UITypes.MESSAGE,
  payload: { message: 'Usuário não encontrado' },
};

describe('Testing Markers saga', () => {
  let sagaTester;
  let apiMock;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);
    sagaTester.start(rootSaga);
  });

  it('can add marker with user data', async () => {
    apiMock.onGet('/users/ManoelLobo').reply(200, { ok: true });
    sagaTester.dispatch(markerActions.addMarker('ManoelLobo'));

    await sagaTester.waitFor(markerActions.Types.ADD);

    expect(sagaTester.getLatestCalledAction()).toEqual({
      type: markerActions.Types.ADD,
      payload: { user: { ok: true }, coord: undefined },
    });
  });

  it('sends a message if it fails', async () => {
    apiMock.onGet('/users/fail').reply(400);

    sagaTester.dispatch(markerActions.addMarker('fail'));

    await sagaTester.waitFor(UITypes.MESSAGE);

    expect(sagaTester.getLatestCalledAction()).toEqual(errorAction);
  });
});
