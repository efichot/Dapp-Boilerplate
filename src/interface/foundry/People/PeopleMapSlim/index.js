/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Box } from 'atomic'
import {
  MapAdvancedCompose,
 } from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props =>{
return <Box h={[160,200, 230, 300, 350]}>
  <MapAdvancedCompose delta='PeopleSearch' collection='people' foundry='PeopleMarkerPopover' />
</Box>
}