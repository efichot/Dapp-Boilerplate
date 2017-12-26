/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
 Flex, Box,
} from 'atomic'
import { LinkIconSimple } from 'foundry'
import { MenuUserProfile } from 'content/menus'
const PersonProfileMenu = <Box bg='white' bs={[1]} p={[10]} >{MenuUserProfile.map(item=> <LinkIconSimple {...item}/> )}</Box>
export default PersonProfileMenu