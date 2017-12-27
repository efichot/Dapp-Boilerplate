/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {Box} from 'atomic'
import {
  LinkIconContext,
} from 'foundry'
import {
  MenuProjectProfile
} from 'content/menus'
/* ------------------------------- Component -------------------------------- */
export default props => <Box bg='white' bs={[1]} p={[10]} >{MenuProjectProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>