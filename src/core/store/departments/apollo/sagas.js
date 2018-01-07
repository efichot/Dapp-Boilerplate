/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery } from 'redux-saga/effects';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import {getAccessToken} from 'store/departments/selectors'
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Redux Actions ---*/ 
import { 
  APOLLO_QUERY_REQUEST,
  APOLLO_QUERY_SUCCESS,
  APOLLO_QUERY_FAILURE,
  APOLLO_QUERY_RESET_REQUEST,
 } from './actions'

 import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_REQUEST } from 'store/departments/actions'


const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_API,
});


networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {req.options.headers = {};}

    // LocalStorage | Filter the Firebase User UID and Access Token
    const userKey = Object.keys(window.localStorage).filter(it => it.startsWith('firebase:authUser'))[0];
    const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;

    // Authorization Token and User UID for backend Role Verification
    const token = user.stsTokenManager.accessToken || null
    const uid = user.stsTokenManager.uid || null
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    req.options.headers.userid = uid ? uid : null
    next();
  }
}]);
const client = new ApolloClient({networkInterface});

function clientQuery(query, variables) {
  return client.query({
    query:query,
    variables: variables
  })
  .then(result => result)
  .catch(err => err);
}

function* queryRequest({payload}) {
  if (payload) {
    try {
      const data = yield call(clientQuery, payload.gql, payload.variables)
      const payloadNew = yield {...payload,data, status: 'requestReturned' }
      yield put({type: APOLLO_QUERY_SUCCESS, payload: payloadNew })
    } catch(e) {
      const payloadNew = {...payload, message: e.message }
      yield put({type: APOLLO_QUERY_FAILURE, payload: payloadNew })
    }
  }
}

function* clearQuery({payload}) {
  yield put({type: APOLLO_QUERY_RESET_REQUEST})
}

/* ------------------------------ Export Sagas ------------------------------ */
export default function* apolloRootSaga() {

  yield [
    takeEvery(APOLLO_QUERY_REQUEST, queryRequest),
    takeEvery(AUTH_LOGOUT_REQUEST, clearQuery),
    takeEvery(AUTH_LOGIN_SUCCESS, clearQuery),
  ];
}

