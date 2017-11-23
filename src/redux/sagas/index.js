import { takeLatest } from 'redux-saga/effects';
import { searchAndAddUser } from 'redux/sagas/markers';
import { Types as MarkersTypes } from 'redux/ducks/markers';

export default function* root() {
  yield [
    takeLatest(MarkersTypes.SEARCH, searchAndAddUser),
  ];
}
