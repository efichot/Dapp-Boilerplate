import { takeEvery, all } from 'redux-saga/effects';

import authentication from './authentication/sagas'
import apollo from './apollo/sagas'
import database from './database/sagas'
import entity from './entity/sagas'
import firestore from './firestore/sagas'
import mapbox from './mapbox/sagas'
import notifications from './notifications/sagas'
import storage from './storage/sagas'
import mining from './mining/sagas'
import rxdb from './rxdb/sagas'

export default function* rootSaga() {
  yield all([
    authentication(),
    apollo(),
    database(),
    entity(),
    firestore(),
    mapbox(),
    mining(),
    notifications(),
    storage(),
    rxdb(),
  ]);
}