/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Flex from 'atoms/Flex'
/* ------------------------- Internal Dependencies -------------------------- */
import MenuIconsComplex from 'workshop/layout/MenuIconsComplex'
/* ------------------------------- Component -------------------------------- */
export default props => 
<div>
  <Flex direction='column' w={[1]} >
    <MenuIconsComplex owner="aside" />
  </Flex>
</div>