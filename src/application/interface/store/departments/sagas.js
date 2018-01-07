import { all } from 'redux-saga/effects';

import notifications from './notifications/sagas'

// Blockchain Integrations
import symbiosis from 'assimilation/symbiosis/sagas'
export default function* rootSaga() {
  yield all([
    ...symbiosis
  ]);
}