import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Types as MarkersTypes } from 'redux/ducks/markers';
import { Types as UITypes } from 'redux/ducks/ui';

export function* searchAndAddUser(action) {
  const response = yield call(api.get, `/users/${action.payload.username}`);

  return response.ok ?
    yield put({
      type: MarkersTypes.ADD,
      payload: { user: response.data, coord: action.payload.coord },
    }) :
    yield put({ type: UITypes.MESSAGE, payload: { message: 'Usuário não encontrado' } });
}
