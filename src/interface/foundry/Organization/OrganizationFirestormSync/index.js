/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
import { FirestormEntitySync } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => <FirestormEntitySync entity='community' branch={['organizations']} collection='organizations' >Sync Organizations Now</FirestormEntitySync>