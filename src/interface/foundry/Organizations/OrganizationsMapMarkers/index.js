/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
import { MapAdvancedCompose } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => <MapAdvancedCompose
  delta='organizationMapMarkers'
  foundry='MarkerPopover'
  itemStyled={{
    w: 1,
  }}
/>