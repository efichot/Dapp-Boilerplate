/* ------------------------- External Dependencies -------------------------- */
import request from 'superagent'
import scriptly from 'scriptly'
import { call, put, fork, takeEvery, take } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import reduxSagaFirebase from 'logic/services/Firebase';

/*--- Redux Actions ---*/ 
import {
  STRIPE_INITIALIZE_SUCCESS,
  STRIPE_INITIALIZE_REQUEST,
  STRIPE_INITIALIZE_FAILURE,
  STRIPE_TOKEN_CREATE_REQUEST,
  STRIPE_TOKEN_CREATE_SUCCESS,
  STRIPE_TOKEN_CREATE_FAILURE,
  STRIPE_CUSTOMER_CREATE_REQUEST,
  STRIPE_CUSTOMER_CREATE_SUCCESS,
  STRIPE_CUSTOMER_CREATE_FAILURE
} from './actions'

const publishableKey = process.env.REACT_APP_STRIPE

/* ------------------------------ Utility ------------------------------ */
function* loadJS() { if(!window.Stripe) scriptly.loadJavascript('https://js.stripe.com/v3/') }

function createToken() {
  return window.stripe.createToken(window.card)
  .then(result => result)
  .catch(err => err);
}

/* ------------------------------ Sagas ------------------------------ */
function* stripeInitialize({}) {
  try {
    const StripeBootstrap = yield call(loadJS)
    // yield window.stripe = window.Stripe(process.env.REACT_APP_STRIPE);
    yield put({type: STRIPE_INITIALIZE_SUCCESS })
  } catch(e) {
    console.log(e)
    yield put({type: STRIPE_INITIALIZE_FAILURE })
  }
}
function* stripeMountComponents({}) {
  try {
    const StripeBootstrap = yield call(loadJS)
    yield window.stripe = window.Stripe(process.env.REACT_APP_STRIPE);
    yield window.elements = window.stripe.elements();
    yield window.card = window.elements.create('card');
    window.card.mount('#card-element');
    yield put({type: STRIPE_INITIALIZE_SUCCESS })
  } catch(e) {
    console.log(e)
    yield put({type: STRIPE_INITIALIZE_FAILURE })
  }
}

function* tokenCreate({payload}) {
  const {order, tid} = payload
  try {
    const tokenRequest = yield call(createToken)
    if (tokenRequest.error) {
        const payload = {message:tokenRequest.error.message, order}
        put({type: STRIPE_TOKEN_CREATE_FAILURE, payload})
      } else {
        const payload = { order, tid, token: tokenRequest}
        yield put({type: STRIPE_TOKEN_CREATE_SUCCESS, payload})
      }
  } catch(e) {
    const payload = {message:e.message, order}
    yield put({type: STRIPE_TOKEN_CREATE_FAILURE, payload})
  }
}

function* customerCreate({}) {
  try {

    yield put({type: STRIPE_CUSTOMER_CREATE_SUCCESS, payload: '' })
  } catch(e) {
    yield put({type: STRIPE_CUSTOMER_CREATE_FAILURE, message: e.message })
  }
}

/* ------------------------------ Export Sagas ------------------------------ */
export default function* stripeRootSaga() {

  yield [
    takeEvery(STRIPE_INITIALIZE_REQUEST, stripeInitialize),
    takeEvery(STRIPE_TOKEN_CREATE_REQUEST, tokenCreate),
    takeEvery(STRIPE_CUSTOMER_CREATE_REQUEST, customerCreate),
  ];
}

