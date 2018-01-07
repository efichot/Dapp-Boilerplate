import React from 'react'
import { Box } from 'atomic'
export default ({asideToggle, asideSmall, asideNormal, asideLarge, ...props}) =><div>
  <Box onClick={asideToggle}>
    Aside Toggle
  </Box>
  <Box onClick={asideSmall}>
    Aside Small
  </Box>
  <Box onClick={asideNormal}>
    Aside Normal
  </Box>
  <Box onClick={asideLarge}>
    Aside Large
  </Box>
  </div>