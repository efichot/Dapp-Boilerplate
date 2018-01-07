/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
/* ------------------------- External Dependencies -------------------------- */

import Home from 'smithing/pages/dashboard/Home'
import Predictions from 'smithing/pages/dashboard/Predictions'
import Todo from 'smithing/pages/dashboard/Todo'
// import Contributors from 'smithing/pages/dashboard/Contributors'

/* ------------------------------- Component -------------------------------- */

const DashboardMainRoutes = props => (
<div>
  
  <Route
    exact
    path='/dashboard'
    component={Home}
  />

  {/*---*--- Predictions ---*---*/}
  <Route
    exact
    path='/dashboard/gains'
    component={Predictions}
  />
  {/*---*--- Predictions ---*---*/}
  <Route
    exact
    path='/dashboard/predictions'
    component={Predictions}
  />
 
</div>);


const mapStateToProps = (state, props) => ({
    authentication: {

    }
  }
)

export default connect(mapStateToProps)(DashboardMainRoutes)