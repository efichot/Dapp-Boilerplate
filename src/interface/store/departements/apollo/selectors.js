export const initialState = {
  query: {
    
  }
}

export const getQuery = (state,query) => state.query && state.query[query] || null
export const getQueryStatus = (state,query) => state.query && state.query[query] && state.query[query].status || 'initialize'
export const getQueryData = (state,query) => state.query[query] && state.query[query].request && state.query[query].request.data || {}