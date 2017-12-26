/* ------------------------- External Dependencies -------------------------- */
import { call, put, fork, takeEvery, take } from 'redux-saga/effects';
import reduxSagaFirebase from 'services/Firebase';

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Redux Actions ---*/ 
import {
rxdbFirebaseSync,
RXDB_COLLECTION_INSERT_REQUEST,
RXDB_COLLECTION_INSERT_SUCCESS,
RXDB_COLLECTION_INSERT_FAILURE,
RXDB_COLLECTION_NEW_DOCUMENT_REQUEST,
RXDB_COLLECTION_NEW_DOCUMENT_SUCCESS,
RXDB_COLLECTION_NEW_DOCUMENT_FAILURE,
RXDB_COLLECTION_UPSERT_ATOMIC_REQUEST,
RXDB_COLLECTION_UPSERT_ATOMIC_SUCCESS,
RXDB_COLLECTION_UPSERT_ATOMIC_FAILURE,
RXDB_COLLECTION_FIND_REQUEST,
RXDB_COLLECTION_FIND_SUCCESS,
RXDB_COLLECTION_FIND_FAILURE,
RXDB_COLLECTION_FIND_ONE_REQUEST,
RXDB_COLLECTION_FIND_ONE_SUCCESS,
RXDB_COLLECTION_FIND_ONE_FAILURE,
RXDB_COLLECTION_DUMP_REQUEST,
RXDB_COLLECTION_DUMP_SUCCESS,
RXDB_COLLECTION_DUMP_FAILURE,
RXDB_COLLECTION_IMPORT_DUMP_REQUEST,
RXDB_COLLECTION_IMPORT_DUMP_SUCCESS,
RXDB_COLLECTION_IMPORT_DUMP_FAILURE,
RXDB_COLLECTION_SYNC_REQUEST,
RXDB_COLLECTION_SYNC_SUCCESS,
RXDB_COLLECTION_SYNC_FAILURE,
RXDB_COLLECTION_REMOVE_REQUEST,
RXDB_COLLECTION_REMOVE_SUCCESS,
RXDB_COLLECTION_REMOVE_FAILURE,
RXDB_DOCUMENT_GET_REQUEST,
RXDB_DOCUMENT_GET_SUCCESS,
RXDB_DOCUMENT_GET_FAILURE,
RXDB_DOCUMENT_SET_REQUEST,
RXDB_DOCUMENT_SET_SUCCESS,
RXDB_DOCUMENT_SET_FAILURE,
RXDB_DOCUMENT_SAVE_REQUEST,
RXDB_DOCUMENT_SAVE_SUCCESS,
RXDB_DOCUMENT_SAVE_FAILURE,
RXDB_DOCUMENT_REMOVE_REQUEST,
RXDB_DOCUMENT_REMOVE_SUCCESS,
RXDB_DOCUMENT_REMOVE_FAILURE,
RXDB_DOCUMENT_UPDATE_REQUEST,
RXDB_DOCUMENT_UPDATE_SUCCESS,
RXDB_DOCUMENT_UPDATE_FAILURE,
RXDB_DOCUMENT_ATOMIC_UPDATE_REQUEST,
RXDB_DOCUMENT_ATOMIC_UPDATE_SUCCESS,
RXDB_DOCUMENT_ATOMIC_UPDATE_FAILURE,
RXDB_DATABASE_WAIT_FOR_LEADERSHIP_REQUEST,
RXDB_DATABASE_WAIT_FOR_LEADERSHIP_SUCCESS,
RXDB_DATABASE_WAIT_FOR_LEADERSHIP_FAILURE,
RXDB_DATABASE_DUMP_REQUEST,
RXDB_DATABASE_DUMP_SUCCESS,
RXDB_DATABASE_DUMP_FAILURE,
RXDB_DATABASE_IMPORT_DUMP_REQUEST,
RXDB_DATABASE_IMPORT_DUMP_SUCCESS,
RXDB_DATABASE_IMPORT_DUMP_FAILURE,
RXDB_DATABASE_REQUEST_IDLE_PROMISE_REQUEST,
RXDB_DATABASE_REQUEST_IDLE_PROMISE_SUCCESS,
RXDB_DATABASE_REQUEST_IDLE_PROMISE_FAILURE,
RXDB_DATABASE_DESTROY_REQUEST,
RXDB_DATABASE_DESTROY_SUCCESS,
RXDB_DATABASE_DESTROY_FAILURE,
RXDB_DATABASE_REMOVE_REQUEST,
RXDB_DATABASE_REMOVE_SUCCESS,
RXDB_DATABASE_REMOVE_FAILURE,
RXDB_DATABASE_CHECK_ADAPTER_REQUEST,
RXDB_DATABASE_CHECK_ADAPTER_SUCCESS,
RXDB_DATABASE_CHECK_ADAPTER_FAILURE,
} from './actions'


/*---*--- Collection Insert ---*---*/
function* collectionInsert({payload, metadata}) {
  try {
    const documentInserted = yield call(collectionInsertAsync, payload, metadata)
    const payloadSuccess = {
      payload: documentInserted
    }
    yield put({type: RXDB_COLLECTION_INSERT_SUCCESS, payload})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_INSERT_FAILURE})
  }
}
async function collectionInsertAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].insert({...payload})
}



/*---*--- Collection New Document ---*---*/
function* collectionNewDocument({payload, metadata}) {
  try {
    const documentInserted = yield call(collectionNewDocumentAsync, payload, metadata)
    yield put({type: RXDB_COLLECTION_NEW_DOCUMENT_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_NEW_DOCUMENT_FAILURE})
  }
}
async function collectionNewDocumentAsync(payload, metadata) {
  const { database, collection } = metadata
  const newDocument = window.singleton.db[database][collection].newDocument() // Create Document with Schema
  newDocument.data = {...payload.payload} // Pass submission data to the document data branch
  newDocument.save() // Save the document
}



/*---*--- Collection Upsert Atomic ---*---*/
function* collectionUpsertAtomic({payload, metadata}) {
  try {
    const documentInserted = yield call(collectionUpsertAtomicAsync, payload, metadata)
    yield put({type: RXDB_COLLECTION_UPSERT_ATOMIC_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_UPSERT_ATOMIC_FAILURE})
  }
}
async function collectionUpsertAtomicAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].upsertAtomic({...payload})
}



/*---*--- Collection Find ---*---*/
function* collectionFind({payload, metadata}) {
  try {

    const documents = yield call(collectionFindAsync, payload, metadata)
    const payloadSuccess = {
      documents
    }
    const metadataSuccess = {
      delta: metadata.delta
    }
    yield put({type: RXDB_COLLECTION_FIND_SUCCESS, payload:payloadSuccess, metadata: metadataSuccess})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_FIND_FAILURE})
  }
}
async function collectionFindAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db.core[collection].find({...payload}).exec().then(documents => documents);
}

/*---*--- Collection Find One ---*---*/
function* collectionFindOne({payload, metadata}) {
  try {
    const documentInserted = yield call(collectionFindOneAsync, payload, metadata)
    yield put({type: RXDB_COLLECTION_FIND_ONE_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_FIND_ONE_FAILURE})
  }
}
async function collectionFindOneAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].findOne({...payload})
}

/*---*--- Collection Dump ---*---*/
function* collectionDump({payload, metadata}) {
  try {
    const documentInserted = yield call(collectionDumpAsync, payload, metadata)
    yield put({type: RXDB_COLLECTION_DUMP_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_DUMP_FAILURE})
  }
}
async function collectionDumpAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].dump({...payload})
}

/*---*--- Collection Import Dump ---*---*/
function* collectionImportDump({payload, metadata}) {
  try {
    const documentInserted = yield call(collectionImportDumpAsync, payload, metadata)
    yield put({type: RXDB_COLLECTION_IMPORT_DUMP_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_IMPORT_DUMP_FAILURE})
  }
}
async function collectionImportDumpAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].importDump({...payload})
}

/*---*--- Collection Sync ---*---*/
function* collectionSync({payload, metadata}) {
  try {
    const documentInserted = yield call(collectionSyncAsync, payload, metadata)
    yield put({type: RXDB_COLLECTION_SYNC_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_SYNC_FAILURE})
  }
}
async function collectionSyncAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].sync({...payload})
}



/*---*--- Collection Remove ---*---*/
function* collectionRemove({payload, metadata}) {
  try {
    const documentInserted = yield call(collectionRemoveAsync, payload, metadata)
    yield put({type: RXDB_COLLECTION_REMOVE_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_COLLECTION_REMOVE_FAILURE})
  }
}
async function collectionRemoveAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].remove({...payload})
}



/*---*--- Document Get ---*---*/
function* documentGet({payload, metadata}) {
  try {
    const documentInserted = yield call(documentGetAsync, payload, metadata)
    yield put({type: RXDB_DOCUMENT_GET_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DOCUMENT_GET_FAILURE})
  }
}
async function documentGetAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].get({...payload})
}



/*---*--- Document Set ---*---*/
function* documentSet({payload, metadata}) {
  try {
    const documentInserted = yield call(documentSetAsync, payload, metadata)
    yield put({type: RXDB_DOCUMENT_SET_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DOCUMENT_SET_FAILURE})
  }
}
async function documentSetAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].set({...payload})
}



/*---*--- Document Save ---*---*/
function* documentSave({payload, metadata}) {
  try {
    const documentInserted = yield call(documentSaveAsync, payload, metadata)
    yield put({type: RXDB_DOCUMENT_SAVE_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DOCUMENT_SAVE_FAILURE})
  }
}
async function documentSaveAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].save({...payload})
}



/*---*--- Document Remove ---*---*/
function* documentRemove({payload, metadata}) {
  try {
    const documentInserted = yield call(documentRemoveAsync, payload, metadata)
    yield put({type: RXDB_DOCUMENT_REMOVE_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DOCUMENT_REMOVE_FAILURE})
  }
}
async function documentRemoveAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].remove({...payload})
}



/*---*--- Document Update ---*---*/
function* documentUpdate({payload, metadata}) {
  try {
    const documentInserted = yield call(documentUpdateAsync, payload, metadata)
    yield put({type: RXDB_DOCUMENT_UPDATE_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DOCUMENT_UPDATE_FAILURE})
  }
}
async function documentUpdateAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].update({...payload})
}



/*---*--- Document Atomic Update ---*---*/
function* documentAtomicUpdate({payload, metadata}) {
  try {
    const documentInserted = yield call(documentAtomicUpdateAsync, payload, metadata)
    yield put({type: RXDB_DOCUMENT_ATOMIC_UPDATE_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DOCUMENT_ATOMIC_UPDATE_FAILURE})
  }
}
async function documentAtomicUpdateAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].atomicUpdate({...payload})
}



/*---*--- Database Wait For Leadership ---*---*/
function* databaseWaitForLeadership({payload, metadata}) {
  try {
    const documentInserted = yield call(databaseWaitForLeadershipAsync, payload, metadata)
    yield put({type: RXDB_DATABASE_WAIT_FOR_LEADERSHIP_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DATABASE_WAIT_FOR_LEADERSHIP_FAILURE})
  }
}
async function databaseWaitForLeadershipAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database].waitForLeadership({...payload})
}



/*---*--- Database Dump ---*---*/
function* databaseDump({payload, metadata}) {
  try {
    const documentInserted = yield call(databaseDumpAsync, payload, metadata)
    yield put({type: RXDB_DATABASE_DUMP_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DATABASE_DUMP_FAILURE})
  }
}
async function databaseDumpAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database].dump({...payload})
}



/*---*--- Database Import Dump ---*---*/
function* databaseImportDump({payload, metadata}) {
  try {
    const documentInserted = yield call(databaseImportDumpAsync, payload, metadata)
    yield put({type: RXDB_DATABASE_IMPORT_DUMP_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DATABASE_IMPORT_DUMP_FAILURE})
  }
}
async function databaseImportDumpAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database].importDump({...payload})
}



/*---*--- Database Request Idle Promise ---*---*/
function* databaseRequestIdlePromise({payload, metadata}) {
  try {
    const documentInserted = yield call(databaseRequestIdlePromiseAsync, payload, metadata)
    yield put({type: RXDB_DATABASE_REQUEST_IDLE_PROMISE_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DATABASE_REQUEST_IDLE_PROMISE_FAILURE})
  }
}
async function databaseRequestIdlePromiseAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database].requestIdlePromise({...payload})
}



/*---*--- Database Destroy ---*---*/
function* databaseDestroy({payload, metadata}) {
  try {
    const documentInserted = yield call(databaseDestroyAsync, payload, metadata)
    yield put({type: RXDB_DATABASE_DESTROY_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DATABASE_DESTROY_FAILURE})
  }
}
async function databaseDestroyAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database].destroy({...payload})
}



/*---*--- Database Remove ---*---*/
function* databaseRemove({payload, metadata}) {
  try {
    const documentInserted = yield call(databaseRemoveAsync, payload, metadata)
    yield put({type: RXDB_DATABASE_REMOVE_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DATABASE_REMOVE_FAILURE})
  }
}
async function databaseRemoveAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database].remove({...payload})
}



/*---*--- Database Check Adapter ---*---*/
function* databaseCheckAdapter({payload, metadata}) {
  try {
    const documentInserted = yield call(databaseCheckAdapterAsync, payload, metadata)
    yield put({type: RXDB_DATABASE_CHECK_ADAPTER_SUCCESS})
  } catch(e) {
    yield put({type: RXDB_DATABASE_CHECK_ADAPTER_FAILURE})
  }
}
async function databaseCheckAdapterAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database].checkAdapter({...payload})
}


export default function* rxdbRootSaga() {
  yield [
   takeEvery(RXDB_COLLECTION_INSERT_REQUEST, collectionInsert),
   takeEvery(RXDB_COLLECTION_NEW_DOCUMENT_REQUEST, collectionNewDocument),
   takeEvery(RXDB_COLLECTION_UPSERT_ATOMIC_REQUEST, collectionUpsertAtomic),
   takeEvery(RXDB_COLLECTION_FIND_REQUEST, collectionFind),
   takeEvery(RXDB_COLLECTION_FIND_ONE_REQUEST, collectionFindOne),
   takeEvery(RXDB_COLLECTION_DUMP_REQUEST, collectionDump),
   takeEvery(RXDB_COLLECTION_IMPORT_DUMP_REQUEST, collectionImportDump),
   takeEvery(RXDB_COLLECTION_SYNC_REQUEST, collectionSync),
   takeEvery(RXDB_COLLECTION_REMOVE_REQUEST, collectionRemove),
   takeEvery(RXDB_DOCUMENT_GET_REQUEST, documentGet),
   takeEvery(RXDB_DOCUMENT_SET_REQUEST, documentSet),
   takeEvery(RXDB_DOCUMENT_SAVE_REQUEST, documentSave),
   takeEvery(RXDB_DOCUMENT_REMOVE_REQUEST, documentRemove),
   takeEvery(RXDB_DOCUMENT_UPDATE_REQUEST, documentUpdate),
   takeEvery(RXDB_DOCUMENT_ATOMIC_UPDATE_REQUEST, documentAtomicUpdate),
   takeEvery(RXDB_DATABASE_WAIT_FOR_LEADERSHIP_REQUEST, databaseWaitForLeadership),
   takeEvery(RXDB_DATABASE_DUMP_REQUEST, databaseDump),
   takeEvery(RXDB_DATABASE_IMPORT_DUMP_REQUEST, databaseImportDump),
   takeEvery(RXDB_DATABASE_REQUEST_IDLE_PROMISE_REQUEST, databaseRequestIdlePromise),
   takeEvery(RXDB_DATABASE_DESTROY_REQUEST, databaseDestroy),
   takeEvery(RXDB_DATABASE_REMOVE_REQUEST, databaseRemove),
   takeEvery(RXDB_DATABASE_CHECK_ADAPTER_REQUEST, databaseCheckAdapter),
  ];
}