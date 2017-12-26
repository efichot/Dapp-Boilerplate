export const FIRESTORE_DOCUMENT_ADD_REQUEST = 'FIRESTORE_DOCUMENT_ADD_REQUEST'
export const FIRESTORE_DOCUMENT_ADD_SUCCESS = 'FIRESTORE_DOCUMENT_ADD_SUCCESS'
export const FIRESTORE_DOCUMENT_ADD_FAILURE = 'FIRESTORE_DOCUMENT_ADD_FAILURE'

export const FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST = 'FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST'
export const FIRESTORE_DOCUMENT_EMPTY_ADD_SUCCESS = 'FIRESTORE_DOCUMENT_EMPTY_ADD_SUCCESS'
export const FIRESTORE_DOCUMENT_EMPTY_ADD_FAILURE = 'FIRESTORE_DOCUMENT_EMPTY_ADD_FAILURE'

export const FIRESTORE_DOCUMENT_SET_REQUEST = 'FIRESTORE_DOCUMENT_SET_REQUEST'
export const FIRESTORE_DOCUMENT_SET_SUCCESS = 'FIRESTORE_DOCUMENT_SET_SUCCESS'
export const FIRESTORE_DOCUMENT_SET_FAILURE = 'FIRESTORE_DOCUMENT_SET_FAILURE'

export const FIRESTORE_DOCUMENT_UPDATE_REQUEST = 'FIRESTORE_DOCUMENT_UPDATE_REQUEST'
export const FIRESTORE_DOCUMENT_UPDATE_SUCCESS = 'FIRESTORE_DOCUMENT_UPDATE_SUCCESS'
export const FIRESTORE_DOCUMENT_UPDATE_FAILURE = 'FIRESTORE_DOCUMENT_UPDATE_FAILURE'

export const FIRESTORE_DOCUMENT_GET_REQUEST = 'FIRESTORE_DOCUMENT_GET_REQUEST'
export const FIRESTORE_DOCUMENT_GET_SUCCESS = 'FIRESTORE_DOCUMENT_GET_SUCCESS'
export const FIRESTORE_DOCUMENT_GET_FAILURE = 'FIRESTORE_DOCUMENT_GET_FAILURE'

export const FIRESTORE_DOCUMENT_ALL_GET_REQUEST = 'FIRESTORE_DOCUMENT_ALL_GET_REQUEST'
export const FIRESTORE_DOCUMENT_ALL_GET_SUCCESS = 'FIRESTORE_DOCUMENT_ALL_GET_SUCCESS'
export const FIRESTORE_DOCUMENT_ALL_GET_FAILURE = 'FIRESTORE_DOCUMENT_ALL_GET_FAILURE'

export const FIRESTORE_DOCUMENT_FILTER_GET_REQUEST = 'FIRESTORE_DOCUMENT_FILTER_GET_REQUEST'
export const FIRESTORE_DOCUMENT_FILTER_GET_SUCCESS = 'FIRESTORE_DOCUMENT_FILTER_GET_SUCCESS'
export const FIRESTORE_DOCUMENT_FILTER_GET_FAILURE = 'FIRESTORE_DOCUMENT_FILTER_GET_FAILURE'

export const FIRESTORE_DOCUMENT_COMPOSE_GET_REQUEST = 'FIRESTORE_DOCUMENT_COMPOSE_GET_REQUEST'
export const FIRESTORE_DOCUMENT_COMPOSE_GET_SUCCESS = 'FIRESTORE_DOCUMENT_COMPOSE_GET_SUCCESS'
export const FIRESTORE_DOCUMENT_COMPOSE_GET_FAILURE = 'FIRESTORE_DOCUMENT_COMPOSE_GET_FAILURE'

export const FIRESTORE_DOCUMENT_DELETE_REQUEST = 'FIRESTORE_DOCUMENT_DELETE_REQUEST'
export const FIRESTORE_DOCUMENT_DELETE_SUCCESS = 'FIRESTORE_DOCUMENT_DELETE_SUCCESS'
export const FIRESTORE_DOCUMENT_DELETE_FAILURE = 'FIRESTORE_DOCUMENT_DELETE_FAILURE'

export const FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST = 'FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST'
export const FIRESTORE_DOCUMENT_FIELDS_DELETE_SUCCESS = 'FIRESTORE_DOCUMENT_FIELDS_DELETE_SUCCESS'
export const FIRESTORE_DOCUMENT_FIELDS_DELETE_FAILURE = 'FIRESTORE_DOCUMENT_FIELDS_DELETE_FAILURE'

export const FIRESTORE_QUERY_REQUEST = 'FIRESTORE_QUERY_REQUEST'
export const FIRESTORE_QUERY_SUCCESS = 'FIRESTORE_QUERY_SUCCESS'
export const FIRESTORE_QUERY_FAILURE = 'FIRESTORE_QUERY_FAILURE'
// firestore :: DocumentAdd |  FIRESTORE_DOCUMENT_ADD
export const firestoreDocumentAddRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_ADD_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentAddSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_ADD_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentAddFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_ADD_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentEmptyAdd |  FIRESTORE_DOCUMENT_EMPTY_ADD
export const firestoreDocumentEmptyAddRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentEmptyAddSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_EMPTY_ADD_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentEmptyAddFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_EMPTY_ADD_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentSet |  FIRESTORE_DOCUMENT_SET
export const firestoreDocumentSetRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_SET_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentSetSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_SET_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentSetFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_SET_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentUpdate |  FIRESTORE_DOCUMENT_UPDATE
export const firestoreDocumentUpdateRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_UPDATE_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentUpdateSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_UPDATE_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentUpdateFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_UPDATE_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentGet |  FIRESTORE_DOCUMENT_GET
export const firestoreDocumentGetRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_GET_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentGetSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_GET_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentGetFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_GET_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentAllGet |  FIRESTORE_DOCUMENT_ALL_GET
export const firestoreDocumentAllGetRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_ALL_GET_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentAllGetSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_ALL_GET_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentAllGetFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_ALL_GET_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentFilterGet |  FIRESTORE_DOCUMENT_FILTER_GET
export const firestoreDocumentFilterGetRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_FILTER_GET_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentFilterGetSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_FILTER_GET_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentFilterGetFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_FILTER_GET_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentComposeGet |  FIRESTORE_DOCUMENT_COMPOSE_GET
export const firestoreDocumentComposeGetRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_COMPOSE_GET_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentComposeGetSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_COMPOSE_GET_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentComposeGetFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_COMPOSE_GET_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentDelete |  FIRESTORE_DOCUMENT_DELETE
export const firestoreDocumentDeleteRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_DELETE_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentDeleteSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_DELETE_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentDeleteFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_DELETE_FAILURE,
  payload,
  metadata
})
  
// firestore :: DocumentFieldsDelete |  FIRESTORE_DOCUMENT_FIELDS_DELETE
export const firestoreDocumentFieldsDeleteRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST,
  payload,
  metadata
})

export const firestoreDocumentFieldsDeleteSuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_FIELDS_DELETE_SUCCESS,
  payload,
  metadata
})

export const firestoreDocumentFieldsDeleteFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_DOCUMENT_FIELDS_DELETE_FAILURE,
  payload,
  metadata
})
  
// firestore :: Query |  FIRESTORE_QUERY
export const firestoreQueryRequest = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_QUERY_REQUEST,
  payload,
  metadata
})

export const firestoreQuerySuccess = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_QUERY_SUCCESS,
  payload,
  metadata
})

export const firestoreQueryFailure = ({payload = {}, metadata = {}}) => ({
  type: FIRESTORE_QUERY_FAILURE,
  payload,
  metadata
})