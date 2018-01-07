/* --------------------------- Define Constants ----------------------------- */

/**
 * The AUTH_[LOGIN/LOGOUT]_[STATUS] family are general purpose actions for 
 * the AUTH_LOGIN_WITH_[TYPE]_[STATUS] family to pass current authentication state
 * back to the store.authentication department.
 */

/*--- Login ---*/
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'

/*--- Logout ---*/
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_LOGOUT_FAILURE = 'AUTH_LOGOUT_FAILURE'

/*--- Phone Login ---*/
export const AUTH_LOGIN_WITH_PHONE_REQUEST = 'AUTH_LOGIN_WITH_PHONE'
export const AUTH_LOGIN_WITH_PHONE_SUCCESS = 'AUTH_LOGIN_WITH_PHONE'
export const AUTH_LOGIN_WITH_PHONE_FAILURE = 'AUTH_LOGIN_WITH_PHONE'

/*--- Authorization Login ---*/
export const AUTH_LOGIN_WITH_AUTHORIZATION_REQUEST = 'AUTH_LOGIN_WITH_AUTHORIZATION_REQUEST'
export const AUTH_LOGIN_WITH_AUTHORIZATION_SUCCESS = 'AUTH_LOGIN_WITH_AUTHORIZATION_SUCCESS'
export const AUTH_LOGIN_WITH_AUTHORIZATION_FAILURE = 'AUTH_LOGIN_WITH_AUTHORIZATION_FAILURE'

/*--- Email/Password Login ---*/
export const AUTH_LOGIN_WITH_EMAIL_PASSWORD_REQUEST = 'AUTH_LOGIN_WITH_EMAIL_PASSWORD_REQUEST'
export const AUTH_LOGIN_WITH_EMAIL_PASSWORD_SUCCESS = 'AUTH_LOGIN_WITH_EMAIL_PASSWORD_SUCCESS'
export const AUTH_LOGIN_WITH_EMAIL_PASSWORD_FAILURE = 'AUTH_LOGIN_WITH_EMAIL_PASSWORD_FAILURE'


/*--- Channel ---*/
// Start
export const AUTH_CHANNEL_START_REQUEST = 'AUTH_CHANNEL_START_REQUEST'
export const AUTH_CHANNEL_START_SUCCESS = 'AUTH_CHANNEL_START_SUCCESS'
export const AUTH_CHANNEL_START_FAILURE = 'AUTH_CHANNEL_START_FAILURE'
// Stop
export const AUTH_CHANNEL_STOP_REQUEST = 'AUTH_CHANNEL_STOP_REQUEST'
export const AUTH_CHANNEL_STOP_SUCCESS = 'AUTH_CHANNEL_STOP_SUCCESS'
export const AUTH_CHANNEL_STOP_FAILURE = 'AUTH_CHANNEL_STOP_FAILURE'
export const AUTH_SYNC_USER = 'AUTH_SYNC_USER'

/* ---------------------------- Define Actions ------------------------------ */

/*--- Login with OAuth ---*/
export const authLoginSuccess = ({payload = {}, metadata = {}}) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload,
  metadata
})

export const authLoginWithAuthorization = ({payload = {}, metadata = {}}) => ({
  type: AUTH_LOGIN_WITH_AUTHORIZATION_REQUEST,
  payload,
  metadata
})

/*--- Login with Phone ---*/
export const authLoginWithPhone = ({payload = {}, metadata = {}}) => ({
  type: AUTH_LOGIN_WITH_PHONE_REQUEST,
  payload,
  metadata
})

/*--- Login with Email/Password ---*/
export const authLoginWithEmailPassword = ({payload = {}, metadata = {}}) => ({
  type: AUTH_LOGIN_WITH_EMAIL_PASSWORD_REQUEST,
  payload,
  metadata
})

/*--- Logout ---*/
export const authLogout = () => ({
  type: AUTH_LOGOUT_REQUEST
})

/*--- Channel Start ---*/
export const authChannelStart = ({payload = {}, metadata = {}}) => ({
  type: AUTH_CHANNEL_START_REQUEST,
  payload,
  metadata
})

/*--- Channel Stop ---*/
export const authChannelStop = ({payload = {}, metadata = {}}) => ({
  type: AUTH_CHANNEL_STOP_REQUEST,
  payload,
  metadata
})

export const authSyncUser = user => ({
  type: AUTH_SYNC_USER,
  user,
});