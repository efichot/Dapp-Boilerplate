/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Absolute } from 'particles'
import { Box } from 'atomic'
import {
  MapAdvancedCompose,
 } from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Absolute top bottom left right>
  <MapAdvancedCompose delta='ResourceSearch' collection='resources' foundry='ResourceMarkerPopover' />
</Absolute>