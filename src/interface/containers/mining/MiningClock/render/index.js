/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Idle from 'react-idle'

/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */


/* ------------------------- Component Properties --------------------------- */

/* ------------------------------- Component -------------------------------- */
export default props =><Idle
    timeout={30000}
    onChange={({ idle }) => 
    {
      if(idle){
        props.miningStartRequest()
      } else {
        props.miningStopRequest()
      } 
     }}
  />