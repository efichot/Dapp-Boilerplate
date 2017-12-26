/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
import { FirestoreDocument } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => <FirestoreDocument {...props}
collection="organizations"
foundry={'OrganizationProfileInterface'}
/>