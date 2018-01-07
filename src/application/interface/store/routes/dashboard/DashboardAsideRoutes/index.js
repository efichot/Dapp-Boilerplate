/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router';
/* ------------------------- External Dependencies -------------------------- */
import { Aside } from 'smithing/zones'

export default () => (
  <div>
    <Route path="/dashboard" component={Aside} />
  </div>);
