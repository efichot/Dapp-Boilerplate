import React from 'react'
import { Box } from 'atomic'
export default ({togglePanels, ...props}) => <Box onClick={togglePanels} {...props} />