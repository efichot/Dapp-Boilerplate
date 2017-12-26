/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import reduxSagaFirebase from 'services/Firebase';
import { actionExists, branchAcceptable, entityCorrect, identifictionInjection, typeCorrect } from 'logic/forms/QueryValidation'

/*--- Redux Actions ---*/ 
import {
  DATABASE_WRITE_REQUEST,
  DATABASE_WRITE_SUCCESS,
  DATABASE_WRITE_FAILURE,
  DATABASE_WRITE_INCORRECT_SETTINGS,
  DATABASE_READ_REQUEST,
  DATABASE_READ_SUCCESS,
  DATABASE_READ_FAILURE,
  DATABASE_READ_INCORRECT_SETTINGS,
  DATABASE_CREATE_REQUEST,
  DATABASE_CREATE_SUCCESS,
  DATABASE_CREATE_FAILURE,
  DATABASE_CREATE_INCORRECT_SETTINGS,
  DATABASE_UPDATE_REQUEST,
  DATABASE_UPDATE_SUCCESS,
  DATABASE_UPDATE_FAILURE,
  DATABASE_UPDATE_INCORRECT_SETTINGS,
  DATABASE_PATCH_REQUEST,
  DATABASE_PATCH_SUCCESS,
  DATABASE_PATCH_FAILURE,
  DATABASE_PATCH_INCORRECT_SETTINGS,
  DATABASE_DELETE_REQUEST,
  DATABASE_DELETE_SUCCESS,
  DATABASE_DELETE_FAILURE,
  DATABASE_DELETE_INCORRECT_SETTINGS,
  DATABASE_CHANNEL_START_REQUEST,
  DATABASE_CHANNEL_START_SUCCESS,
  DATABASE_CHANNEL_START_FAILURE,
  DATABASE_CHANNEL_STOP_REQUEST,
  DATABASE_CHANNEL_STOP_SUCCESS,
  DATABASE_CHANNEL_STOP_FAILURE,
  DATABASE_CHANNEL_START_INCORRECT_SETTINGS,
  databaseChannelSync,
  DATABASE_SYNC_START_REQUEST,
  DATABASE_SYNC_START_SUCCESS,
  DATABASE_SYNC_START_FAILURE,
  DATABASE_SYNC_STOP_REQUEST,
  DATABASE_SYNC_STOP_SUCCESS,
  DATABASE_SYNC_STOP_FAILURE,
  DATABASE_SYNC_START_INCORRECT_SETTINGS,
  DATABASE_ENTITY_ID_INJECTION,
} from './actions'

import {
  notificationOpen
} from 'store/departments/actions'


import {
} from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */

/* --------------------------- Module Constants ----------------------------- */
/**
 * Default Write Type for Database interactions
 * 
 * @return {String} type @desc create, update, patch or hault as default database write type 
 */
const DATABASE_DEFAULT_WRITE_TYPE = 'create'

/* ------------------------------ Saga Stories ------------------------------ */

/** Database Read
 * 
 * @desc Read Application Database when DATABASE_READ_REQUEST action is dispatched.
 * 
 * Variables
 * @const {String} entity: collection classification (ex: user, form, product, etc...)
 * @const {Array} branch: path to object branch
 * 
 * @returns {Object} DATABASE_READ_[STATUS]
 */

function* databaseRead({entity, branch}) {
  /*--- Validate Request ---*/
  /*--- Try Request ---*/
  try {
    const request = yield call(reduxSagaFirebase.database.read, `${entity}/${branch.join("/")}`);
    yield put({type: DATABASE_READ_SUCCESS, payload: request, metadata: {entity, branch} })
  } catch(e) {
    yield put({type: DATABASE_READ_FAILURE, payload: e.message })
  }
}

/** Database Write | databaseWrite
 * 
 * @desc Database Write via dispatched DATABASE_WRITE_REQUEST actions.
 * 
 * @todo: Save the { payload, metadata} object in local storage securely using public/private keys.
 * 
 * Summary
 * When s DATABASE_WRITE_REQUEST is dispatched, the frontend will SAVE the WRITE in a local blockbox. 
 * Encrypted using public keys specific to security level and request payload sensitivty.
 * Upon arrival to the backend, the application may save the encrypted request and/or unlock the 
 * encrypted data. Choosing to save and/or unlock the request will be determined via the request metadata
 * and/or backend restriction.
 * 
 * Blockchain Integration
 * Dissimilar to traditional applications, the interface request may have to complete negotiations with
 * a Blockchain (Etherium) smart contract, before receiving authority to complete parts/all of the request.
 * Hence, the Saga may save it's "state" for future (seconds, minutes, days, etc...) initilization using a
 * local/global storage system. However, the Saga MUST have the ability to relinuish current computational 
 * resources and interface references, because of the potential extended asynorhnicity of DAPPs.
 *  
 * 
 * Goals
 * 1. Handle unexpected connection errors between the interface and application database.
 * 2. Support offline local state changes and storage state reconciliation gracefully.
 * 3. Check for negotiations with smart contracts affecting state request permissions/restrictions.
 * 
 * Variables
 * @param payload
 * @param metadata
 * 
 * Constants
 * @const {String} entity @desc object classification (ex: user, form, product, etc...)
 * @const {Array} branch: a list of branch paths to generate the object write paths
 * @const {Object} payload @desc validated data saved to the application database
 * 
 * @returns {Object} DATABASE_DELETE_[STATUS]
 * @desc Dispatch a Success or Failure action via DATABASE_WRITE_[STATUS]
 */

function* databaseWrite({payload, metadata}) {
  /*--- Variables ---*/
  let request = {}
  /*--- Destructure ---*/
  const { entity, branch } = metadata
  /*--- Defaults ---*/
  const writeType = metadata.writeType && typeCorrect(metadata.writeType) ? metadata.writeType : DATABASE_DEFAULT_WRITE_TYPE

  /*--- Validate Request ---*/
  if( !(entity && entityCorrect(entity) && branchAcceptable(branch))) {
    return put({type: DATABASE_WRITE_INCORRECT_SETTINGS, metadata: {entity, branch, writeType} })
  }


  /*--- Try Request ---*/
  try {
    /*--- Switch the database write types to either create, update or patch data  ---*/
    switch(writeType) {
      case 'create':
        request = yield call(reduxSagaFirebase.database.create, `/${entity}/${branch.join("/")}`, payload);
        break;
      case 'update':
        request = yield call(reduxSagaFirebase.database.update, `/${entity}/${branch.join("/")}`, payload);
        break;
      case 'patch':
        request = yield call(reduxSagaFirebase.database.patch, `/${entity}/${branch.join("/")}`, payload);
        break;
    default:
      return {response: 'Response: databaseWrite failed because writeType default to null. Please select push, update or set.'};
    }



    yield put({type: DATABASE_WRITE_SUCCESS, message: request, writeType  })
    yield put(notificationOpen({payload:{title: 'Database Write Success'}}))
  } catch(e) {
    yield put({type: DATABASE_WRITE_FAILURE, message: e.message })
    yield put(notificationOpen({payload:{title: 'Database Write Failure'}}))
  }
}

/** Database Delete | databaseDelete
 * 
 * @desc Delete data upon dispatched DATABASE_DELETE_REQUEST action.
 * 
 * Variables
 * @param payload
 * @param metadata
 * 
 * Constants
 * @const {String} entity: collection classification (ex: user, form, product, etc...)
 * @const {Array} branch: path to object branch
 * 
 * @returns {Object} DATABASE_DELETE_[STATUS]
 * @desc Dispatch a Success or Failure action via DATABASE_DELETE_[STATUS]
 */

function* databaseDelete({entity, branch}) {
  /*--- Validate Request ---*/
  // Key Injection
  // if (identifictionInjection(id)) return put({type: DATABASE_ENTITY_ID_INJECTION, metadata: {entity, branch, id} })
  // // Path Viablity
  // if( ( entity && entityCorrect(entity) && branchAcceptable(branch))) {
  //   return put({type: DATABASE_DELETE_INCORRECT_SETTINGS, metadata: {entity, branch, id} })
  // }
  /*--- Try Request ---*/
  try {
    const request = yield call(reduxSagaFirebase.database.delete, `/${entity}/${branch.join("/")}`);
    yield put({type: DATABASE_DELETE_SUCCESS, message: request })
  } catch(e) {
    yield put({type: DATABASE_DELETE_FAILURE, message: e.message })
  }
}

/** Database Channel Start | databaseChannelStart
 * 
 * @desc Observe/return data changing on the database entity/branch via child_[added, removed, changed, moved] 
 * 
 * Variables
 * @param payload
 * @param metadata
 * 
 * Constants
 * @const {String} entity: collection classification (ex: user, form, product, etc...)
 * @const {Array} branch: path to object branch
 * 
 * @returns {Object} DATABASE_DELETE_[STATUS]
 * @desc Dispatch a Success or Failure action via DATABASE_DELETE_[STATUS]
 */

function* databaseChannelStart({entity, branch, event}) {
  if( !( entity && entityCorrect(entity) && branchAcceptable(branch)) ) {
    return put({type: DATABASE_CHANNEL_START_INCORRECT_SETTINGS, metadata: {entity, branch, event} })
  }
  try {
    const request = yield call(reduxSagaFirebase.database.channel, `/${entity}/${branch.join("/")}`, event);
    yield put({type: DATABASE_CHANNEL_START_SUCCESS, message: request })
  } catch(e) {
    yield put({type: DATABASE_CHANNEL_START_FAILURE, message: e.message })
  }
}

/** Database Sync Start | databaseSyncStart
 * 
 * @desc Observe data changing on the database and dispatch a redux action on change.
 * 
 * @var {String} entity: object classification (ex: user, form, product, etc...)
 * @var {Array} branch: path to object branch/leaf
 * 
 * @returns {Object} DATABASE_SYNC_[STATUS]
 * @desc Dispatch a Success or Failure action via DATABASE_SYNC_[STATUS]
 */

function* databaseSyncStart({entity, branch, action, transform}) {
  /*--- Validate Request ---*/
  // Path Viablity
  if( !(entity && entityCorrect(entity) && branchAcceptable(branch) && actionExists(action))) {
    return put({type: DATABASE_SYNC_START_INCORRECT_SETTINGS, metadata: {entity, branch, action, transform} })
  }

  /*--- Try Request ---*/
  try {
    const request = yield call(reduxSagaFirebase.database.sync, `/${entity}/${branch.join("/")}`, action, transform);
    yield put({type: DATABASE_SYNC_START_SUCCESS, message: request })
  } catch(e) {
    yield put({type: DATABASE_SYNC_START_FAILURE, message: e.message })
  }
}

function* databaseChannelStop({entity, branch, action, transform}) {}
function* databaseSyncStop({entity, branch, action, transform}) {}

/* ------------------------------ Export Sagas ------------------------------ */
export default function* databaseRootSaga() {
  const todosTransformer = todos => !todos ? {} : todos

  yield [
    reduxSagaFirebase.database.sync('community', databaseChannelSync, todosTransformer),
    takeEvery(DATABASE_READ_REQUEST, databaseRead),
    takeEvery(DATABASE_WRITE_REQUEST, databaseWrite),
    takeEvery(DATABASE_DELETE_REQUEST, databaseDelete),
    takeEvery(DATABASE_CHANNEL_START_REQUEST, databaseChannelStart)
  ];
}

