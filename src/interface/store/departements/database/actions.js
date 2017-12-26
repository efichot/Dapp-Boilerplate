/* --------------------------- Define Constants ----------------------------- */
/*--- Read Database ---*/
export const DATABASE_WRITE_REQUEST = 'DATABASE_WRITE_REQUEST'
export const DATABASE_WRITE_SUCCESS = 'DATABASE_WRITE_SUCCESS'
export const DATABASE_WRITE_FAILURE = 'DATABASE_WRITE_FAILURE'
export const DATABASE_WRITE_INCORRECT_SETTINGS = 'DATABASE_WRITE_INCORRECT_SETTINGS'

/*--- Read Database ---*/
export const DATABASE_READ_REQUEST = 'DATABASE_READ_REQUEST'
export const DATABASE_READ_SUCCESS = 'DATABASE_READ_SUCCESS'
export const DATABASE_READ_FAILURE = 'DATABASE_READ_FAILURE'
export const DATABASE_READ_INCORRECT_SETTINGS = 'DATABASE_READ_INCORRECT_SETTINGS'

/*--- Create Database ---*/
export const DATABASE_CREATE_REQUEST = 'DATABASE_CREATE_REQUEST'
export const DATABASE_CREATE_SUCCESS = 'DATABASE_CREATE_SUCCESS'
export const DATABASE_CREATE_FAILURE = 'DATABASE_CREATE_FAILURE'
export const DATABASE_CREATE_INCORRECT_SETTINGS = 'DATABASE_CREATE_INCORRECT_SETTINGS'

/*--- Update Database ---*/
export const DATABASE_UPDATE_REQUEST = 'DATABASE_UPDATE_REQUEST'
export const DATABASE_UPDATE_SUCCESS = 'DATABASE_UPDATE_SUCCESS'
export const DATABASE_UPDATE_FAILURE = 'DATABASE_UPDATE_FAILURE'
export const DATABASE_UPDATE_INCORRECT_SETTINGS = 'DATABASE_UPDATE_INCORRECT_SETTINGS'

/*--- Patch Database ---*/
export const DATABASE_PATCH_REQUEST = 'DATABASE_PATCH_REQUEST'
export const DATABASE_PATCH_SUCCESS = 'DATABASE_PATCH_SUCCESS'
export const DATABASE_PATCH_FAILURE = 'DATABASE_PATCH_FAILURE'
export const DATABASE_PATCH_INCORRECT_SETTINGS = 'DATABASE_PATCH_INCORRECT_SETTINGS'

/*--- Delete Database ---*/
export const DATABASE_DELETE_REQUEST = 'DATABASE_DELETE_REQUEST'
export const DATABASE_DELETE_SUCCESS = 'DATABASE_DELETE_SUCCESS'
export const DATABASE_DELETE_FAILURE = 'DATABASE_DELETE_FAILURE'
export const DATABASE_DELETE_INCORRECT_SETTINGS = 'DATABASE_DELETE_INCORRECT_SETTINGS'

/*--- Channel Database ---*/
export const DATABASE_CHANNEL_START_REQUEST = 'DATABASE_CHANNEL_START_REQUEST'
export const DATABASE_CHANNEL_START_SUCCESS = 'DATABASE_CHANNEL_START_SUCCESS'
export const DATABASE_CHANNEL_START_FAILURE = 'DATABASE_CHANNEL_START_FAILURE'
export const DATABASE_CHANNEL_START_INCORRECT_SETTINGS = 'DATABASE_CHANNEL_START_INCORRECT_SETTINGS'
export const DATABASE_CHANNEL_STOP_REQUEST = 'DATABASE_CHANNEL_STOP_REQUEST'
export const DATABASE_CHANNEL_STOP_SUCCESS = 'DATABASE_CHANNEL_STOP_SUCCESS'
export const DATABASE_CHANNEL_STOP_FAILURE = 'DATABASE_CHANNEL_STOP_FAILURE'
export const DATABASE_CHANNEL_STOP_INCORRECT_SETTINGS = 'DATABASE_CHANNEL_STOP_INCORRECT_SETTINGS'

export const DATABASE_CHANNEL_STREAM = 'DATABASE_CHANNEL_STREAM'

/*--- Sync Database ---*/
export const DATABASE_SYNC_START_REQUEST = 'DATABASE_SYNC_START_REQUEST'
export const DATABASE_SYNC_START_SUCCESS = 'DATABASE_SYNC_START_SUCCESS'
export const DATABASE_SYNC_START_FAILURE = 'DATABASE_SYNC_START_FAILURE'
export const DATABASE_SYNC_START_INCORRECT_SETTINGS = 'DATABASE_SYNC_START_INCORRECT_SETTINGS'
export const DATABASE_SYNC_STOP_REQUEST = 'DATABASE_SYNC_STOP_REQUEST'
export const DATABASE_SYNC_STOP_SUCCESS = 'DATABASE_SYNC_STOP_SUCCESS'
export const DATABASE_SYNC_STOP_FAILURE = 'DATABASE_SYNC_STOP_FAILURE'
export const DATABASE_SYNC_STOP_INCORRECT_SETTINGS = 'DATABASE_SYNC_STOP_INCORRECT_SETTINGS'

/*--- Utilities Database ---*/
export const DATABASE_ENTITY_ID_INJECTION = 'DATABASE_ENTITY_ID_INJECTION'

/* ---------------------------- Define Actions ------------------------------ */

/** --------- Write ---------
 * @func databaseWriteRequest 
 * @desc Request data from application database
 * @func databaseWriteSuccess 
 * @desc Start interface/database reconciliation
 * @func databaseWriteFailure 
 * @desc Report/catalog database read failure 
 * 
 */ 
export const databaseWriteRequest = ({payload, metadata}) => ({
  type: DATABASE_WRITE_REQUEST,
  payload: payload,
  metadata: metadata,
})

export const databaseWriteSuccess = ({payload, metadata}) => ({
  type: DATABASE_WRITE_SUCCESS,
  payload,
  metadata
})

export const databaseWriteFailure = ({err, metadata}) => ({
  type: DATABASE_WRITE_FAILURE,
  error: true,
  err,
  metadata
})

/** --------- Read ---------
 * @func databaseReadRequest 
 * @desc Request data from application database
 * @func databaseReadSuccess 
 * @desc Start interface/database reconciliation
 * @func databaseReadFailure 
 * @desc Report/catalog database read failure 
 * 
 */ 
export const databaseReadRequest = ({entity, branch}) => ({
  type: DATABASE_READ_REQUEST,
  entity,
  branch
})

export const databaseReadSuccess = ({payload, metadata}) => ({
  type: DATABASE_READ_SUCCESS,
  payload,
  metadata
})

export const databaseReadFailure = ({err, metadata}) => ({
  type: DATABASE_READ_FAILURE,
  error: true,
  err,
  metadata
})

/** --------- Create ---------
 * @func databaseCreateRequest 
 * @desc Request authority to submit new data
 * @func databaseCreateSuccess 
 * @desc Start interface/database reconciliation
 * @func databaseCreateFailure 
 * @desc Report/catalog database create failure 
 * 
 */ 
export const databaseCreateRequest = ({payload, metadata}) => ({
  type: DATABASE_CREATE_REQUEST,
  payload,
  metadata
})

export const databaseCreateSuccess = ({payload, metadata}) => ({
  type: DATABASE_CREATE_SUCCESS,
  payload,
  metadata
})

export const databaseCreateFailure = ({err, metadata}) => ({
  type: DATABASE_CREATE_FAILURE,
  error: true,
  err,
  metadata
})

/** --------- Update ---------
 * @func databaseUpdateRequest 
 * @desc Request authority to submit overriding data
 * @func databaseUpdateSuccess 
 * @desc Start interface/database reconciliation
 * @func databaseUpdateFailure 
 * @desc Report/catalog database update failure 
 * 
 */ 
export const databaseUpdateRequest = ({payload, metadata}) => ({
  type: DATABASE_UPDATE_REQUEST,
  payload,
  metadata
})

export const databaseUpdateSuccess = ({payload, metadata}) => ({
  type: DATABASE_UPDATE_SUCCESS,
  payload,
  metadata
})

export const databaseUpdateFailure = ({err, metadata}) => ({
  type: DATABASE_UPDATE_FAILURE,
  error: true,
  err,
  metadata
})

/** --------- Patch ---------
 * @func databasePatchRequest 
 * @desc Request authority to submit patch/insert data
 * @func databasePatchSuccess 
 * @desc Start interface/database reconciliation
 * @func databasePatchFailure 
 * @desc Report/catalog database patch failure 
 * 
 */ 

export const databasePatchRequest = ({payload, metadata}) => ({
  type: DATABASE_PATCH_REQUEST,
  payload,
  metadata
})

export const databasePatchSuccess = ({payload, metadata}) => ({
  type: DATABASE_PATCH_SUCCESS,
  payload,
  metadata
})

export const databasePatchFailure = ({err, metadata}) => ({
  type: DATABASE_PATCH_FAILURE,
  error: true,
  err,
  metadata
})

/** --------- Delete ---------
 * @func databaseDeleteRequest 
 * @desc Request authority to delete data
 * @func databaseDeleteSuccess 
 * @desc Start interface/database reconciliation
 * @func databaseDeleteFailure 
 * @desc Report/catalog database delete failure 
 * 
 */ 
export const databaseDeleteRequest = ({entity, branch}) => ({
  type: DATABASE_DELETE_REQUEST,
  entity, 
  branch
})

export const databaseDeleteSuccess = ({payload, metadata}) => ({
  type: DATABASE_DELETE_SUCCESS,
  payload,
  metadata
})

export const databaseDeleteFailure = ({err, metadata}) => ({
  type: DATABASE_DELETE_FAILURE,
  error: true,
  err,
  metadata
})

/** --------- Channel ---------
 * @func databaseChannelStartRequest 
 * @desc Request authority to stop channel, which emits every change at the specified path in the database.
 * @func databaseChannelStartSuccess 
 * @desc Initialize channel observables and fire interface/database reconciliation when neccesary.
 * @func databaseChannelStartFailure 
 * @desc Report/catalog channel start failure 
 * 
 * @func databaseChannelStopRequest 
* @desc Request authority to stop active channel.
 * @func databaseChannelStopSuccess 
 * @desc Shutdown channel oberservables,
 * @func databaseChannelStopFailure 
 * @desc Report/catalog channel stop failure 
 */ 
export const databaseChannelStartRequest = ({payload, metadata}) => ({
  type: DATABASE_CHANNEL_START_REQUEST,
  payload,
  metadata
})

export const databaseChannelStartSuccess = ({payload, metadata}) => ({
  type: DATABASE_CHANNEL_START_SUCCESS,
  payload,
  metadata
})

export const databaseChannelStartFailure = ({err, metadata}) => ({
  type: DATABASE_CHANNEL_START_FAILURE,
  error: true,
  err,
  metadata
})
export const databaseChannelStopRequest = ({payload, metadata}) => ({
  type: DATABASE_CHANNEL_STOP_REQUEST,
  payload,
  metadata
})

export const databaseChannelStopSuccess = ({payload, metadata}) => ({
  type: DATABASE_CHANNEL_STOP_SUCCESS,
  payload,
  metadata
})

export const databaseChannelStopFailure = ({err, metadata}) => ({
  type: DATABASE_CHANNEL_STOP_FAILURE,
  error: true,
  err,
  metadata
})


export const databaseChannelSync = todos => ({
  type: DATABASE_CHANNEL_STREAM,
  payload: todos
});

/** --------- Sync ---------
 * @func databaseSyncStartRequest 
 * @desc Request authority to start sync, which emits every time path changes.
 * @func databaseSyncStartSuccess 
 * @desc Initialize channel observables and fire interface/database reconciliation when neccesary.
 * @func databaseSyncStartFailure 
 * @desc Report/catalog channel start failure 
 * 
 * @func databaseSyncStopRequest 
* @desc Request authority to stop active sync.
 * @func databaseSyncStopSuccess 
 * @desc Shutdown sync oberservables,
 * @func databaseSyncStopFailure 
 * @desc Report/catalog sync stop failure 
 */ 
export const databaseSyncStartRequest = ({payload, metadata}) => ({
  type: DATABASE_SYNC_START_REQUEST,
  payload,
  metadata
})

export const databaseSyncStartSuccess = ({payload, metadata}) => ({
  type: DATABASE_SYNC_START_SUCCESS,
  payload,
  metadata
})

export const databaseSyncStartFailure = ({err, metadata}) => ({
  type: DATABASE_SYNC_START_FAILURE,
  error: true,
  err,
  metadata
})
export const databaseSyncStopRequest = ({payload, metadata}) => ({
  type: DATABASE_SYNC_STOP_REQUEST,
  payload,
  metadata
})

export const databaseSyncStopSuccess = ({payload, metadata}) => ({
  type: DATABASE_SYNC_STOP_SUCCESS,
  payload,
  metadata
})

export const databaseSyncStopFailure = ({err, metadata}) => ({
  type: DATABASE_SYNC_STOP_FAILURE,
  error: true,
  err,
  metadata
})
