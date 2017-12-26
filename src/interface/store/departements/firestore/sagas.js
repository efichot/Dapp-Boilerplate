/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import reduxSagaFirebase from 'services/Firebase';
import {
  notificationOpen
} from 'store/departments/actions'
import {
  FIRESTORE_DOCUMENT_ADD_REQUEST,
  FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST,
  FIRESTORE_DOCUMENT_SET_REQUEST,
  FIRESTORE_DOCUMENT_UPDATE_REQUEST,
  FIRESTORE_DOCUMENT_GET_REQUEST,
  FIRESTORE_DOCUMENT_ALL_GET_REQUEST,
  FIRESTORE_DOCUMENT_FILTER_GET_REQUEST,
  FIRESTORE_DOCUMENT_COMPOSE_GET_REQUEST,
  FIRESTORE_DOCUMENT_DELETE_REQUEST,
  FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST,
  FIRESTORE_QUERY_REQUEST,
} from './actions'
import {
  firestoreDocumentAddSuccess,
  firestoreDocumentAddFailure,
  firestoreDocumentEmptyAddSuccess,
  firestoreDocumentEmptyAddFailure,
  firestoreDocumentSetSuccess,
  firestoreDocumentSetFailure,
  firestoreDocumentUpdateSuccess,
  firestoreDocumentUpdateFailure,
  firestoreDocumentGetSuccess,
  firestoreDocumentGetFailure,
  firestoreDocumentAllGetSuccess,
  firestoreDocumentAllGetFailure,
  firestoreDocumentFilterGetSuccess,
  firestoreDocumentFilterGetFailure,
  firestoreDocumentComposeGetSuccess,
  firestoreDocumentComposeGetFailure,
  firestoreDocumentDeleteSuccess,
  firestoreDocumentDeleteFailure,
  firestoreDocumentFieldsDeleteSuccess,
  firestoreDocumentFieldsDeleteFailure,
  firestoreQuerySuccess,
  firestoreQueryFailure,
} from './actions'

import {
  firestoreDocumentGetRequest,
} from './actions'
/*---*--- Document Add ---*---*/
function* documentAdd({payload, metadata}) {
  try {
    const { branch } = metadata
    const documentID = yield call(reduxSagaFirebase.firestore.documentAdd, branch, payload);
    yield put(firestoreDocumentAddSuccess({payload: {documentID}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentAddFailure({payload: e, metadata}))
  }
}

/*---*--- Document Empty Add ---*---*/
function* documentEmptyAdd({metadata}) {
  try {
    const { branch } = metadata
    const documentID = yield call(reduxSagaFirebase.firestore.documentEmptyAdd, branch);
    yield put(firestoreDocumentEmptyAddSuccess({payload: {documentID}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentEmptyAddFailure({payload: e, metadata}))
  }
}

/*---*--- Document Set ---*---*/
function* documentSet({payload, metadata}) {
  try {
    const { branch, merge } = metadata
    const documentID = yield call(reduxSagaFirebase.firestore.documentSet, branch, payload, merge);
    yield put(firestoreDocumentSetSuccess({payload: {}, metadata}))
  } catch(e) {
    console.log(e)
    yield put(firestoreDocumentSetFailure({payload: e, metadata}))
  }
}

/*---*--- Document Update ---*---*/
function* documentUpdate({payload, metadata}) {
  try {
    const { branch } = metadata
    const documentID = yield call(reduxSagaFirebase.firestore.documentUpdate, branch, payload);
    yield put(firestoreDocumentUpdateSuccess({payload: {}, metadata}))
    yield put(firestoreDocumentGetRequest({payload:{}, metadata}))
  } catch(e) {
    console.log(e)
    yield put(firestoreDocumentUpdateFailure({payload: e, metadata}))
  }
}


/*---*--- Document Get ---*---*/
function* documentGet({payload, metadata}) {
  try {
    const { branch, merge } = metadata
    const data = yield call(reduxSagaFirebase.firestore.documentGet, branch);
    yield put(firestoreDocumentGetSuccess({payload: data, metadata}))
  } catch(e) {
    console.log(e)
    yield put(firestoreDocumentGetFailure({payload: e, metadata}))
  }
}


/*---*--- Document All Get ---*---*/
function* documentAllGet({payload, metadata}) {
  try {
    const { branch, merge } = metadata
    const data = yield call(reduxSagaFirebase.firestore.documentAllGet, branch);
    yield put(firestoreDocumentAllGetSuccess({payload: data, metadata}))
  } catch(e) {
    console.log(e)
    yield put(firestoreDocumentAllGetFailure({payload: e, metadata}))
  }
}


/*---*--- Document Filter Get ---*---*/
function* documentFilterGet({payload, metadata}) {
  try {
    const { branch, filters } = metadata
    const data = yield call(reduxSagaFirebase.firestore.documentFilterGet, branch, filters);
    yield put(firestoreDocumentFilterGetSuccess({payload: data, metadata}))
  } catch(e) {
    console.log(e)
    yield put(firestoreDocumentFilterGetFailure({payload: e, metadata}))
  }
}

/*---*--- Document Compose Get ---*---*/
function* documentComposeGet({payload, metadata}) {
  try {
    const { branch, references } = metadata

    const t = yield call(documentComposeGetAsync, metadata)
    yield put(firestoreDocumentComposeGetSuccess({metadata}))
  } catch(e) {
    console.log(e)
    yield put(firestoreDocumentComposeGetFailure({payload: e, metadata}))
  }
}

function* documentComposeGetAsync(metadata) {
  const { branch, references } = metadata
  console.log(references)
  for (var index = 0; index < references.length; index++) {
    let filters = {
      where: [
        ['eid', '==', references[index]]
      ]
    }
    const data = yield call(reduxSagaFirebase.firestore.documentFilterGet, branch, filters);
    console.log(data)
    if(data[0]) {
      yield put(firestoreDocumentGetSuccess({payload: data[0], metadata: {
        ...metadata,
        delta: data[0].id
      }}))
    }
  }
}

/*---*--- Document Delete ---*---*/
function* documentDelete({payload, metadata}) {
  try {
    const { branch } = metadata
    const deleteRequest = yield call(reduxSagaFirebase.firestore.documentDelete, branch);
    yield put(firestoreDocumentDeleteSuccess({payload: {...deleteRequest}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Document Fields Delete ---*---*/
function* documentFieldsDelete({payload, metadata}) {
  try {
    const { branch } = metadata
    const deleteFieldsRequest = yield call(reduxSagaFirebase.firestore.documentFieldsDelete, branch, payload);
    yield put(firestoreDocumentFieldsDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentFieldsDeleteFailure({payload: e, metadata}))
  }
}

/*---*--- Query ---*---*/
function* query({payload, metadata}) {
  try {

    yield put(firestoreQuerySuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(firestoreQueryFailure({payload: e, metadata}))
  }
}


export default function* firestoreRootSaga() {
  yield [
   takeEvery(FIRESTORE_DOCUMENT_ADD_REQUEST, documentAdd),
   takeEvery(FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST, documentEmptyAdd),
   takeEvery(FIRESTORE_DOCUMENT_SET_REQUEST, documentSet),
   takeEvery(FIRESTORE_DOCUMENT_UPDATE_REQUEST, documentUpdate),
   takeEvery(FIRESTORE_DOCUMENT_GET_REQUEST, documentGet),
   takeEvery(FIRESTORE_DOCUMENT_ALL_GET_REQUEST, documentAllGet),
   takeEvery(FIRESTORE_DOCUMENT_FILTER_GET_REQUEST, documentFilterGet),
   takeEvery(FIRESTORE_DOCUMENT_COMPOSE_GET_REQUEST, documentComposeGet),
   takeEvery(FIRESTORE_DOCUMENT_DELETE_REQUEST, documentDelete),
   takeEvery(FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST, documentFieldsDelete),
   takeEvery(FIRESTORE_QUERY_REQUEST, query),
  ];
}