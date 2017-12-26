/* ------------------------- External Dependencies -------------------------- */
import { call, put, fork, takeEvery, take } from 'redux-saga/effects';
import reduxSagaFirebase from 'services/Firebase';

/* ------------------------- Internal Dependencies -------------------------- */
import geo from 'mapbox-geocoding'

/*--- Redux Actions ---*/ 
import {
  MAPBOX_GEOCODE_REQUEST,
} from './actions'
import {
  mapboxGeocodeSuccess,
  mapboxGeocodeFailure,
} from './actions'

/*---*--- Geocode ---*---*/
function* geocode({payload, metadata}) {
  try {
    return yield call(mapboxGeocode, payload)
  } catch(e) {
    yield put(mapboxGeocodeFailure())
  }
}

const mapboxGeocode = address => new Promise((resolve, reject)=>{
  geo.setAccessToken(process.env.REACT_APP_MAPBOX);
  geo.geocode('mapbox.places', 'Dam Square, Amsterdam', function (err, geoData) {
    resolve(geoData)
  });
})


export default function* rxdbRootSaga() {
  yield [
   takeEvery(MAPBOX_GEOCODE_REQUEST, geocode),
  ];
}