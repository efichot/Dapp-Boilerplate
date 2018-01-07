import React from 'react'
import { Box } from 'atomic'
export default ({headerToggle, headerSmall, headerNormal, headerLarge, ...props}) =><div>
  <Box onClick={headerToggle}>
    Header Toggle
  </Box>
  <Box onClick={headerSmall}>
    Header Small
  </Box>
  <Box onClick={headerNormal}>
    Header Normal
  </Box>
  <Box onClick={headerLarge}>
    Header Large
  </Box>
  </div>