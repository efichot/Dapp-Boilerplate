/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'atomic'
/* ------------------------- External Dependencies -------------------------- */
import RegionBranding  from 'smithing/regions/RegionBranding'
import RegionDiagnostics  from 'smithing/regions/RegionDiagnostics'

export default props =><Route path="/dashboard" component={RegionDiagnostics} />