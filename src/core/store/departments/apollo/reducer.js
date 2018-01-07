import { initialState } from './selectors'
import { 
  APOLLO_QUERY_REQUEST,
  APOLLO_QUERY_SUCCESS,
  APOLLO_QUERY_FAILURE,
  APOLLO_QUERY_RESET_REQUEST,
  APOLLO_WATCH_QUERY_REQUEST,
  APOLLO_WATCH_QUERY_SUCCESS,
  APOLLO_WATCH_QUERY_FAILURE,
  APOLLO_MUTATE_REQUEST,
  APOLLO_MUTATE_SUCCESS,
  APOLLO_MUTATE_FAILURE,
  APOLLO_READ_QUERY_REQUEST,
  APOLLO_READ_QUERY_SUCCESS,
  APOLLO_READ_QUERY_FAILURE,
  APOLLO_READ_FRAGMENT_REQUEST,
  APOLLO_READ_FRAGMENT_SUCCESS,
  APOLLO_READ_FRAGMENT_FAILURE,
  APOLLO_WRITE_QUERY_REQUEST,
  APOLLO_WRITE_QUERY_SUCCESS,
  APOLLO_WRITE_QUERY_FAILURE,
  APOLLO_WRITE_FRAGMENT_REQUEST,
  APOLLO_WRITE_FRAGMENT_SUCCESS,
  APOLLO_WRITE_FRAGMENT_FAILURE,
 } from './actions'

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case APOLLO_QUERY_REQUEST:
      return {
        ...state,
        query: {
        ...state.query,
          [payload.id]: {
            ...payload,
            status:'requested'
          }
        }
      }
    case APOLLO_QUERY_SUCCESS:
      return {
        ...state,
        query: {
        ...state.query,
          [payload.id]: {
          ...state.query[payload.id],
            status:payload.status,
            request: {...payload.data}
          }
        }
      }
    case APOLLO_QUERY_FAILURE:
      return {
        ...state,
        query: {
        ...state.query,
          [payload.id]: {
            ...state.query[payload.id],
            status:'failure',
            message: payload.message
          }
        }
      }
    case APOLLO_QUERY_RESET_REQUEST:
    return {
      ...initialState
    }
    default:
      return state
  }
}
