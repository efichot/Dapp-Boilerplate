/* ------------------------ External Dependencies ------------------------ */
import _ from 'lodash'
const admin = require('firebase-admin');

const firestoreAdd = ({collection, data}) => {
  admin.firestore.collection(collection).add(data)
}
