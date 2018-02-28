import { all } from 'redux-saga/effects';

import notifications from './notifications/sagas'
import uport from './uport/sagas'

export default function* rootSaga() {
  yield all([
    uport(),
    notifications()
  ]);
}
