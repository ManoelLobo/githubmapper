import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Types } from 'redux/ducks/markers';

export function* searchAndAddUser(action) {
  const response = yield call(api.get, `/users/${action.payload.username}`);

  yield put({ type: Types.ADD, payload: { user: response.data, coord: action.payload.coord } });
}
