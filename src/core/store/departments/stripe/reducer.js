import { initialState } from './selectors'
import {
  STRIPE_INITIALIZE_REQUEST,
  STRIPE_INITIALIZE_SUCCESS,
  STRIPE_INITIALIZE_FAILURE,
  STRIPE_TOKEN_CREATE_REQUEST,
  STRIPE_TOKEN_CREATE_SUCCESS,
  STRIPE_TOKEN_CREATE_FAILURE,
  STRIPE_CUSTOMER_CREATE_REQUEST,
  STRIPE_CUSTOMER_CREATE_SUCCESS,
  STRIPE_CUSTOMER_CREATE_FAILURE
} from './actions'

export default (state = initialState, {type, payload}) => {
  switch (type) {

    // Initialize
    case STRIPE_INITIALIZE_REQUEST:
      return {
        ...state,
        status: 'loading'
      }
    case STRIPE_INITIALIZE_SUCCESS:
      return {
        ...state,
        status: true
      }
    case STRIPE_INITIALIZE_FAILURE:
      return {
        ...state,
        status: false
      }
    
    // Token Create
    case STRIPE_TOKEN_CREATE_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          [payload.tid]:{
            tid: payload.tid,
            order: payload.order,
            type: payload.type,
            status: 'requested'
          }
        }
      }
    case STRIPE_TOKEN_CREATE_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          [payload.tid]:{
            ...state.requests[payload.tid],
            status: 'success',
            token: payload.token
          }
        }
      }
    case STRIPE_TOKEN_CREATE_FAILURE:
      return {
        ...state,
        requests: {
          ...state.requests,
          [payload.tid]:{
            ...state.requests[payload.tid],
            message: payload.message,
            status: 'failure',
          }
        }
      }
    
    // Initialize
    case STRIPE_CUSTOMER_CREATE_REQUEST:
      return {
        ...state,
        status: 'loading'
      }
    case STRIPE_CUSTOMER_CREATE_SUCCESS:
      return {
        ...state,
        status: 'success'
      }
    case STRIPE_CUSTOMER_CREATE_FAILURE:
      return {
        ...state,
        status: 'failure'
      }

    // Default
    default:
      return state
  }
}
