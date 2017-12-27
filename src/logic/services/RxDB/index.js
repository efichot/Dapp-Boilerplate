import RxDB from 'rxdb';

import UserSchema from './schema/User'
import OrganizationSchema from './schema/Organization'
import ProjectSchema from './schema/Project'

RxDB.plugin(require('pouchdb-adapter-idb'));

async function databaseConnecttionEstablish() {
  window.singleton = {db: {}}
  window.singleton.db.core = await RxDB.create({
    name: 'core',           // <- name
    adapter: 'idb',          // <- storage-adapter
    multiInstance: true         // <- multiInstance (default: true)
  });

  await  window.singleton.db.core.collection({
    name: 'users',
    schema: UserSchema
  });

  await  window.singleton.db.core.collection({
    name: 'organizations',
    schema: OrganizationSchema
  });

  await  window.singleton.db.core.collection({
    name: 'projects',
    schema: ProjectSchema
  });
}

databaseConnecttionEstablish()