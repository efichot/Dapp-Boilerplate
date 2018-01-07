/* ------------------------ External Dependencies ------------------------ */
import _ from 'lodash'
const admin = require('firebase-admin');
/* ------------------------------- Database --------------------------------- */
const databaseSearch = ({entity, branch = [], boundaries = {}, order = {} }) => new Promise((resolve, reject) => {
  const dataNew = []
  let pathReference = admin.database().ref(`/${entity}/${_.join(branch, '/')}`);

  /*--- ref.orderByKey ---*/
  if (order && order.orderByKey) {
    pathReference = pathReference.orderByKey()
  }

  // ref.orderByChild()
  if (order && order.orderByChild) {
    pathReference = pathReference.orderByChild(order.orderByChild)
  }

  // ref.orderByValue()
  if (order && order.orderByValue) {
    pathReference = pathReference.orderByValue(order.orderByValue)
  }

  /*--- Boundaries ---*/

  // ref.limitToFirst() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst
  if (boundaries && boundaries.limitToFirst && boundaries.limitToFirst < 500) {
    pathReference = pathReference.limitToFirst(boundaries.limitToFirst)  
  }
  // ref.limitToLast() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst
  if (boundaries && boundaries.limitToLast && boundaries.limitToLast < 500) {
    pathReference = pathReference.limitToLast(boundaries.limitToLast)  
  }
  // ref.startAt() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst
  if (boundaries && boundaries.startAt) {
    pathReference = pathReference.startAt(boundaries.startAt)  
  }
  // ref.endAt() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst
  if (boundaries && boundaries.endAt) {
    pathReference = pathReference.endAt(boundaries.endAt)  
  }
  // ref.equalTo() | https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference#limitToFirst
  if (boundaries && boundaries.equalTo) {
    pathReference = pathReference.equalTo(boundaries.equalTo)  
  }

  /*--- Filter Database ---*/
  pathReference.on('child_added', (snapshot,childKey) => {
    return snapshot
    ? dataNew.push(snapshot.val())
    : reject(new Error(`Firebase Error: the admin.database.ref in databaseSearch() is originating the error.`))
  });

  /**
   * Resolve Database Read
   * ref.once('value', ...) is run after all ref.on('child_added', ...) events have occured.
   * This implied request order is "guaranteed" by Firebase and doesn't require another request,
   * because caching will return values to the final request to resolve the database read.
   * 
   * Related Information - Answer by Firebase Core Developer
   * https://stackoverflow.com/questions/27978078/how-to-separate-initial-data-load-from-incremental-children-with-firebase/27995609#27995609
   * 
   */
  pathReference.once('value', function(snapshot) {
    resolve(order && order.reverse ? dataNew.reverse() : dataNew)
  });

});

const databaseRead = ({entity, branch = [], boundaries = {}, order = {} }) => new Promise((resolve, reject) => {
  const dataNew = []
  let pathReference = admin.database().ref(`/${entity}/${_.join(branch, '/')}`);

  pathReference.once('value', function(snapshot) {
    resolve(snapshot.val())
  });

});
const databaseReadSingle = ({entity, branch = [], boundaries = {}, order = {} }) => new Promise((resolve, reject) => {
  const dataNew = []
  let pathReference = admin.database().ref(`/${entity}/${_.join(branch, '/')}`);

  pathReference.once('value', function(snapshot) {
    resolve(snapshot.val())
  });

});

/**
 * databaseWrite 
 * @const {String} entity 
 * @const {Array/Object} array 
 * @const {Object} payload 
 * @const {Object} metdata
 * 
 * @desc metadata.config
 *  @var writeType - [push, update, set]
 */
function databaseWrite({ entity, branch = [], payload = {}, config = {}, boundaries = {}, order = {} }) {
  // Validate Query
  if (!entityCorrect(entity)) return false 

  let pathReference = admin.database().ref(`${entity}/${_.join(branch, '/')}`);
  switch(config.writeType) {

    // Push | writeType
    case'push':
      try {
        const objectReference = pathReference.push({
          ...payload
        })

        let objectDatabaseReference = admin.database().ref(`${entity}/${_.join(branch, '/') + "/" + objectReference }`);
        objectDatabaseReference.update({pointer: objectReference})

        // Return object's unique identifier (ex: KqOZV5OSevQaZz3KcxK)
        return objectReference
      } catch(e) {
        return {message: e.message}
      }
    break;
    // Update | writeType
    case'update':
      try {
        const objectReference = pathReference.update({...payload})
        return objectReference
      } catch(e) {
        return {message: e.message}
      }
    break;
    // Set | writeType
    case'set':
      try {
        const objectReference = pathReference.set({...payload})
        // Return Promise containing void 
        return objectReference
        } catch(e) {
          return {message: e.message}
        }
      break;
    default:
      return {message: 'error: databaseWrite failed because writeType default is null. Please select push, update or set.'}

  }

}

/* --------------------------- Utility Functions  --------------------------- */
const isObject = obj => {
  return Object.prototype.toString(obj) === '[object Object]' ? true : false;
};

const toArray = snapshot => {
  console.log(snapshot)
  let arr = [];
  snapshot.forEach(childSnapshot => {
    let val = childSnapshot.val();
    if(isObject(val)){
      val.id = childSnapshot.key;
    }
    arr.push(val);
  });
  return arr;
};

/**
 * @func entityCorrect
 * @desc Confirm the database write contains a valid entity in the application database schema.
 */
const entityCorrect = (entity) => [
  'self', 
  'community', 
  'organization', 
  'infrastructure',
  'mutate',
  ].filter((entityMatch) => entity === entityMatch ? true : false)

/**
 * @func typeCorrect
 * @desc Confirm the database write contains a valid database write type before attempting a database change.
 */
const typeCorrect = (type) => ['create', 'update', 'patch'].filter((dataWriteTypeMatch) => type === dataWriteTypeMatch ? true : false)

module.exports = {
  databaseRead,
  databaseReadSingle,
  databaseWrite
}


