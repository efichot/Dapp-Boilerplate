/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
import { FirestoreList } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => <FirestoreList
  delta='organizationFilter'
  foundry='OrganizationCard'
  itemStyled={{
    w: 1,
  }}
/>