import React from 'react';
import { Absolute, Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  MapAdvancedCompose,
  FormAddContributorPerson,
 } from 'foundry'
import {
  EntityAddFull,
} from 'entity'
import EntityCore from '../EntityCore'
import EntityCoreSearchCalendar from '../EntityCoreSearchCalendar'
export default props => !props.collection === 'events' ? null :

<div>
  <EntityCoreSearchCalendar
    collection={props.collection}
    entity={props.entity}
  />
</div>