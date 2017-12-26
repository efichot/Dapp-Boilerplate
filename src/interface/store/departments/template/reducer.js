import { initialState } from './selectors'
import { TEMPLATE } from './actions'

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TEMPLATE:
      return {
        state
      }
    default:
      return state
  }
}
