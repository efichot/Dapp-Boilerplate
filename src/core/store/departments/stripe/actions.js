/* --------------------------- Define Constants ----------------------------- */
/*--- Stripe Initialize Request | Constants ---*/
export const STRIPE_INITIALIZE_REQUEST = 'STRIPE_INITIALIZE_REQUEST'
export const STRIPE_INITIALIZE_SUCCESS = 'STRIPE_INITIALIZE_SUCCESS'
export const STRIPE_INITIALIZE_FAILURE = 'STRIPE_INITIALIZE_FAILURE'

/*--- Token Create Request | Constants ---*/
export const STRIPE_TOKEN_CREATE_REQUEST = 'STRIPE_TOKEN_CREATE_REQUEST'
export const STRIPE_TOKEN_CREATE_SUCCESS = 'STRIPE_TOKEN_CREATE_SUCCESS'
export const STRIPE_TOKEN_CREATE_FAILURE = 'STRIPE_TOKEN_CREATE_FAILURE'

/*--- Customer Create Request | Constants ---*/
export const STRIPE_CUSTOMER_CREATE_REQUEST = 'STRIPE_CUSTOMER_CREATE_REQUEST'
export const STRIPE_CUSTOMER_CREATE_SUCCESS = 'STRIPE_CUSTOMER_CREATE_SUCCESS'
export const STRIPE_CUSTOMER_CREATE_FAILURE = 'STRIPE_CUSTOMER_CREATE_FAILURE'



/* ------------------------------- Actions ---------------------------------- */
/*--- Token Create Request | Action ---*/
export const stripeInitializeRequest = () => ({
  type: STRIPE_INITIALIZE_REQUEST,
})

export const stripeInitializeSuccess = ({payload}) => ({
  type: STRIPE_INITIALIZE_SUCCESS,
  payload
})

export const stripeInitializeFailure = ({payload}) => ({
  type: STRIPE_INITIALIZE_FAILURE,
  payload
})

/*--- Token Create Request | Action ---*/
export const stripeTokenCreateRequest = ({payload}) => ({
  type: STRIPE_TOKEN_CREATE_REQUEST,
  payload
})

export const stripeTokenCreateSuccess = ({payload}) => ({
  type: STRIPE_TOKEN_CREATE_SUCCESS,
  payload
})

export const stripeTokenCreateFailure = ({payload}) => ({
  type: STRIPE_TOKEN_CREATE_FAILURE,
  payload
})

/*--- Customer Create Request | Stripe ---*/
export const stripeCustomerCreateRequest = ({payload}) => ({
  type: STRIPE_CUSTOMER_CREATE_REQUEST,
  payload
})

export const stripeCustomerCreateSuccess = ({payload}) => ({
  type: STRIPE_CUSTOMER_CREATE_SUCCESS,
  payload
})

export const stripeCustomerCreateFailure = ({payload}) => ({
  type: STRIPE_CUSTOMER_CREATE_FAILURE,
  payload
})

