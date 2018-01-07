import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { 
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILURE,
  AUTH_SYNC_USER
} from './actions'

export default (state = initialState, { type, payload, metadata, user }) => {
  switch (type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true
      }
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case AUTH_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false
      }
    case AUTH_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case AUTH_SYNC_USER:
      return {
        loggedIn: user != null,
        user: user,
      }
    default:
      return state
  }
}
