import { ApolloClient } from 'apollo-client'

/* --------------------------- Define Constants ----------------------------- */
// Query | (http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient\.query)
export const APOLLO_QUERY_REQUEST = 'APOLLO_QUERY_REQUEST'
export const APOLLO_QUERY_SUCCESS = 'APOLLO_QUERY_SUCCESS'
export const APOLLO_QUERY_FAILURE = 'APOLLO_QUERY_FAILURE'

// WatchQuery | (http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient\.watchQuery)
export const APOLLO_WATCH_QUERY_REQUEST = 'APOLLO_WATCH_QUERY_REQUEST'
export const APOLLO_WATCH_QUERY_SUCCESS = 'APOLLO_WATCH_QUERY_SUCCESS'
export const APOLLO_WATCH_QUERY_FAILURE = 'APOLLO_WATCH_QUERY_FAILURE'

// Mutate| (http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient\.mutate)
export const APOLLO_MUTATE_REQUEST = 'APOLLO_MUTATE_REQUEST'
export const APOLLO_MUTATE_SUCCESS = 'APOLLO_MUTATE_SUCCESS'
export const APOLLO_MUTATE_FAILURE = 'APOLLO_MUTATE_FAILURE'

// ReadQuery | (http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient\.writeQuery)
export const APOLLO_READ_QUERY_REQUEST = 'APOLLO_READ_QUERY_REQUEST'
export const APOLLO_READ_QUERY_SUCCESS = 'APOLLO_READ_QUERY_SUCCESS'
export const APOLLO_READ_QUERY_FAILURE = 'APOLLO_READ_QUERY_FAILURE'

// ReadFragment | (http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient\.readFragment)
export const APOLLO_READ_FRAGMENT_REQUEST = 'APOLLO_READ_FRAGMENT_REQUEST'
export const APOLLO_READ_FRAGMENT_SUCCESS = 'APOLLO_READ_FRAGMENT_SUCCESS'
export const APOLLO_READ_FRAGMENT_FAILURE = 'APOLLO_READ_FRAGMENT_FAILURE'

// WriteQuery | (http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient\.writeQuery)
export const APOLLO_WRITE_QUERY_REQUEST = 'APOLLO_WRITE_QUERY_REQUEST'
export const APOLLO_WRITE_QUERY_SUCCESS = 'APOLLO_WRITE_QUERY_SUCCESS'
export const APOLLO_WRITE_QUERY_FAILURE = 'APOLLO_WRITE_QUERY_FAILURE'

// WriteFragment | (http://dev.apollodata.com/core/apollo-client-api.html#ApolloClient\.writeFragment)
export const APOLLO_WRITE_FRAGMENT_REQUEST = 'APOLLO_WRITE_FRAGMENT_REQUEST'
export const APOLLO_WRITE_FRAGMENT_SUCCESS = 'APOLLO_WRITE_FRAGMENT_SUCCESS'
export const APOLLO_WRITE_FRAGMENT_FAILURE = 'APOLLO_WRITE_FRAGMENT_FAILURE'


export const APOLLO_QUERY_RESET_REQUEST = 'APOLLO_QUERY_RESET_REQUEST'

/* ------------------------------- Actions ---------------------------------- */
/*--- Apollo | Query Request ---*/
export const apolloQueryResetRequest = ({payload}) => ({
  type: APOLLO_QUERY_RESET_REQUEST
})

/*--- Apollo | Query Request ---*/
export const apolloQueryRequest = ({payload}) => ({
  type: APOLLO_QUERY_REQUEST,
  payload
})
export const apolloQuerySuccess = ({payload}) => ({
  type: APOLLO_QUERY_SUCCESS,
  payload
})
export const apolloQueryFailure = ({payload}) => ({
  type: APOLLO_QUERY_FAILURE,
  payload
})

/*--- Apollo | Watch Query Request ---*/
export const apolloWatchQueryRequest = ({payload}) => ({
  type: APOLLO_WATCH_QUERY_REQUEST
})
export const apolloWatchQuerySuccess = ({payload}) => ({
  type: APOLLO_WATCH_QUERY_SUCCESS
})
export const apolloWatchQueryFailure = ({payload}) => ({
  type: APOLLO_WATCH_QUERY_FAILURE
})

/*--- Apollo | Mutate Request ---*/
export const apolloMutateRequest = ({payload}) => ({
  type: APOLLO_MUTATE_REQUEST
})
export const apolloMutateSuccess = ({payload}) => ({
  type: APOLLO_MUTATE_SUCCESS
})
export const apolloMutateFailure = ({payload}) => ({
  type: APOLLO_MUTATE_FAILURE
})


/*--- Apollo | Read Query Request ---*/
export const apolloReadQueryRequest = () => ({
  type: APOLLO_READ_QUERY_REQUEST
})
export const apolloReadQuerySuccess = () => ({
  type: APOLLO_READ_QUERY_SUCCESS
})
export const apolloReadQueryFailure = () => ({
  type: APOLLO_READ_QUERY_FAILURE
})


/*--- Apollo | Read Fragment Request ---*/
export const apolloReadFragmentRequest = () => ({
  type: APOLLO_READ_FRAGMENT_REQUEST
})
export const apolloReadFragmentSuccess = () => ({
  type: APOLLO_READ_FRAGMENT_SUCCESS
})
export const apolloReadFragmentFailure = () => ({
  type: APOLLO_READ_FRAGMENT_FAILURE
})


/*--- Apollo | Write Query Request ---*/
export const apolloWriteQueryRequest = () => ({
  type: APOLLO_WRITE_QUERY_REQUEST
})
export const apolloWriteQuerySuccess = () => ({
  type: APOLLO_WRITE_QUERY_SUCCESS
})
export const apolloWriteQueryFailure = () => ({
  type: APOLLO_WRITE_QUERY_FAILURE
})


/*--- Apollo | Write Fragment Request ---*/
export const apolloWriteFragmentRequest = () => ({
  type: APOLLO_WRITE_FRAGMENT_REQUEST
})
export const apolloWriteFragmentSuccess = () => ({
  type: APOLLO_WRITE_FRAGMENT_SUCCESS
})
export const apolloWriteFragmentFailure = () => ({
  type: APOLLO_WRITE_FRAGMENT_FAILURE
})

