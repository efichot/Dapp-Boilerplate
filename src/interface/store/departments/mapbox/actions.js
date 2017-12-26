export const MAPBOX_GEOCODE_REQUEST = 'MAPBOX_GEOCODE_REQUEST'
export const MAPBOX_GEOCODE_SUCCESS = 'MAPBOX_GEOCODE_SUCCESS'
export const MAPBOX_GEOCODE_FAILURE = 'MAPBOX_GEOCODE_FAILURE'
// mapbox :: Geocode |  MAPBOX_GEOCODE
export const mapboxGeocodeRequest = ({payload, metadata}) => ({
  type: MAPBOX_GEOCODE_REQUEST,
  payload,
  metadata
})

export const mapboxGeocodeSuccess = ({payload, metadata}) => ({
  type: MAPBOX_GEOCODE_SUCCESS,
  payload,
  metadata
})

export const mapboxGeocodeFailure = ({payload, metadata}) => ({
  type: MAPBOX_GEOCODE_FAILURE,
  payload,
  metadata
})