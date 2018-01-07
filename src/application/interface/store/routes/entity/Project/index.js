import React from 'react';
import EntityCore from '../EntityCore'
import EntityCoreSearchMap from '../EntityCoreSearchMap'
import { Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  MapAdvancedCompose,
  UserProfileDashboard,
  PrimeDataTable,
  DataTable,
  DataCalendar,
  FormAddContributorPerson,
  FormHotlineAddPerson,
 } from 'foundry'

import {
  ArticleAddFull,
  OrganizationAddFull,
  PersonAddFull,
  ProjectAddFull,
  ResourceAddFull,
} from 'entity'
export default props => !props.collection === 'projects' ? null :
<div>
<EntityCoreSearchMap
  collection={props.collection}
  entity={props.entity}
/>
<EntityCore
  collection={props.collection}
  entity={props.entity}
  foundryProfile='ProjectProfileEntry'
  formExtend='ProjectAdd'
/>
</div>