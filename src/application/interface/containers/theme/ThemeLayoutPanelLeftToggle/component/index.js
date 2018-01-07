import React from 'react'
import { Box } from 'atomic'
export default ({togglePanel, ...props}) => <Box onClick={togglePanel} {...props} />