import {
FIRESTORE_DOCUMENT_ADD_REQUEST,
FIRESTORE_DOCUMENT_ADD_SUCCESS,
FIRESTORE_DOCUMENT_ADD_FAILURE,
FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST,
FIRESTORE_DOCUMENT_EMPTY_ADD_SUCCESS,
FIRESTORE_DOCUMENT_EMPTY_ADD_FAILURE,
FIRESTORE_DOCUMENT_SET_REQUEST,
FIRESTORE_DOCUMENT_SET_SUCCESS,
FIRESTORE_DOCUMENT_SET_FAILURE,
FIRESTORE_DOCUMENT_UPDATE_REQUEST,
FIRESTORE_DOCUMENT_UPDATE_SUCCESS,
FIRESTORE_DOCUMENT_UPDATE_FAILURE,
FIRESTORE_DOCUMENT_GET_REQUEST,
FIRESTORE_DOCUMENT_GET_SUCCESS,
FIRESTORE_DOCUMENT_GET_FAILURE,
FIRESTORE_DOCUMENT_ALL_GET_REQUEST,
FIRESTORE_DOCUMENT_ALL_GET_SUCCESS,
FIRESTORE_DOCUMENT_ALL_GET_FAILURE,
FIRESTORE_DOCUMENT_FILTER_GET_REQUEST,
FIRESTORE_DOCUMENT_FILTER_GET_SUCCESS,
FIRESTORE_DOCUMENT_FILTER_GET_FAILURE,
FIRESTORE_DOCUMENT_COMPOSE_GET_REQUEST,
FIRESTORE_DOCUMENT_COMPOSE_GET_SUCCESS,
FIRESTORE_DOCUMENT_COMPOSE_GET_FAILURE,
FIRESTORE_DOCUMENT_DELETE_REQUEST,
FIRESTORE_DOCUMENT_DELETE_SUCCESS,
FIRESTORE_DOCUMENT_DELETE_FAILURE,
FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST,
FIRESTORE_DOCUMENT_FIELDS_DELETE_SUCCESS,
FIRESTORE_DOCUMENT_FIELDS_DELETE_FAILURE,
FIRESTORE_QUERY_REQUEST,
FIRESTORE_QUERY_SUCCESS,
FIRESTORE_QUERY_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case FIRESTORE_DOCUMENT_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_EMPTY_ADD_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_EMPTY_ADD_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORE_DOCUMENT_SET_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_SET_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_SET_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORE_DOCUMENT_UPDATE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_UPDATE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_UPDATE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORE_DOCUMENT_GET_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_GET_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_GET_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORE_DOCUMENT_ALL_GET_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_ALL_GET_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_ALL_GET_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORE_DOCUMENT_FILTER_GET_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_FILTER_GET_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_FILTER_GET_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }



        case FIRESTORE_DOCUMENT_COMPOSE_GET_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            references: metadata.references,
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_COMPOSE_GET_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case FIRESTORE_DOCUMENT_COMPOSE_GET_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }



      case FIRESTORE_DOCUMENT_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_DOCUMENT_FIELDS_DELETE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_DOCUMENT_FIELDS_DELETE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case FIRESTORE_QUERY_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case FIRESTORE_QUERY_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            payload
          }
        }
      case FIRESTORE_QUERY_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


    default:
      return state
  }
}