/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import EntityCore from '../EntityCore'
import EntityCoreSearchMap from '../EntityCoreSearchMap'
import Contributors from 'smithing/pages/dashboard/Contributors'
import { Route } from 'atomic' 
import { FirestoreList, FirestoreDocument } from 'containers'
import {
  EntityAddFull,
  FormEntityAddDynamic,
} from 'entity'

export default props => !props.collection === 'projects' ? null :
<div>
  <Route exact path="/dashboard/deals" component={FirestoreList} 
    collection={props.collection}
    entity={props.entity}
    delta='DealSearch'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
  <Route
    exact
    collection={props.collection}
    path={`/dashboard/${props.entity}/create`} 
    component={Contributors}
    formExtend={props.formExtend}
  />
  <Route 
    path={`/dashboard/${props.entity}/:eid`}
    component={FirestoreDocument}
    collection={props.collection}
    entity={props.entity}
    foundry={props.foundryProfile}
    />
  </Switch>
</div>