/* ------------------------- External Dependencies -------------------------- */

/* ------------------------- Internal Dependencies -------------------------- */
import { initialState } from './selectors'
import {
  DATABASE_WRITE_REQUEST,
  DATABASE_WRITE_SUCCESS,
  DATABASE_WRITE_FAILURE,
  DATABASE_READ_REQUEST,
  DATABASE_READ_SUCCESS,
  DATABASE_READ_FAILURE,
  DATABASE_CREATE_REQUEST,
  DATABASE_CREATE_SUCCESS,
  DATABASE_CREATE_FAILURE,
  DATABASE_UPDATE_REQUEST,
  DATABASE_UPDATE_SUCCESS,
  DATABASE_UPDATE_FAILURE,
  DATABASE_PATCH_REQUEST,
  DATABASE_PATCH_SUCCESS,
  DATABASE_PATCH_FAILURE,
  DATABASE_DELETE_REQUEST,
  DATABASE_DELETE_SUCCESS,
  DATABASE_DELETE_FAILURE,
  DATABASE_SYNC_START_REQUEST,
  DATABASE_SYNC_START_SUCCESS,
  DATABASE_SYNC_START_FAILURE,
  DATABASE_SYNC_STOP_REQUEST,
  DATABASE_SYNC_STOP_SUCCESS,
  DATABASE_SYNC_STOP_FAILURE,
  DATABASE_CHANNEL_START_REQUEST,
  DATABASE_CHANNEL_START_SUCCESS,
  DATABASE_CHANNEL_START_FAILURE,
  DATABASE_CHANNEL_STOP_REQUEST,
  DATABASE_CHANNEL_STOP_SUCCESS,
  DATABASE_CHANNEL_STOP_FAILURE,
  DATABASE_CHANNEL_STREAM
} from './actions'

/* ---------------------------- Redux Reducers ------------------------------ */
export default (state = initialState, { type, payload, metadata }) => {

  switch (type) {
    /*--- Read ---*/
    case DATABASE_READ_REQUEST:
      return {
        ...state,
      }
    case DATABASE_CHANNEL_STREAM:
      return {
        ...state,
        community:  payload
      }
    case DATABASE_READ_SUCCESS:
      const { entity, branch } = metadata
      const save = branch[0]
      return {
        ...state,
        [entity]: {
          [save]: payload
        }
      }
    case DATABASE_READ_FAILURE:
      return {
        ...state,
      }

    /*--- Read ---*/
    case DATABASE_READ_REQUEST:
      return {
        ...state,
      }
    case DATABASE_READ_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_READ_FAILURE:
      return {
        ...state,
      }
    /*--- Create ---*/
    case DATABASE_CREATE_REQUEST:
      return {
        ...state,
      }
    case DATABASE_CREATE_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_CREATE_FAILURE:
      return {
        ...state,
      }
    /*--- Update ---*/
    case DATABASE_UPDATE_REQUEST:
      return {
        ...state,
      }
    case DATABASE_UPDATE_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_UPDATE_FAILURE:
      return {
        ...state,
      }
    /*--- Patch ---*/
    case DATABASE_PATCH_REQUEST:
      return {
        ...state,
      }
    case DATABASE_PATCH_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_PATCH_FAILURE:
      return {
        ...state,
      }
    /*--- Delete ---*/
    case DATABASE_DELETE_REQUEST:
      return {
        ...state,
      }
    case DATABASE_DELETE_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_DELETE_FAILURE:
      return {
        ...state,
      }

    /*--- Sync ---*/
    case DATABASE_SYNC_START_REQUEST:
      return {
        ...state,
      }
    case DATABASE_SYNC_START_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_SYNC_START_FAILURE:
      return {
        ...state,
      }
    case DATABASE_SYNC_STOP_REQUEST:
      return {
        ...state,
      }
    case DATABASE_SYNC_STOP_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_SYNC_STOP_FAILURE:
      return {
        ...state,
      }

    /*--- Channel ---*/
    case DATABASE_CHANNEL_START_REQUEST:
      return {
        ...state,
      }
    case DATABASE_CHANNEL_START_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_CHANNEL_START_FAILURE:
      return {
        ...state,
      }
    case DATABASE_CHANNEL_STOP_REQUEST:
      return {
        ...state,
      }
    case DATABASE_CHANNEL_STOP_SUCCESS:
      return {
        ...state,
      }
    case DATABASE_CHANNEL_STOP_FAILURE:
      return {
        ...state,
      }

    default:
      return state
  }
}
