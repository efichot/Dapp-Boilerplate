/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { icons, svg } from 'assets'
import Flex from 'atoms/Flex'
import Absolute from 'atoms/Absolute'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Image from 'atoms/Image'
import SVG from 'atoms/SVG'

import DrawerOpen from 'containers/drawer/DrawerOpen'
import MenuPeoplePopover from 'smithing/menus/MenuPeoplePopover'

import MenuChatPopover from 'smithing/menus/MenuChatPopover'
import MenuPredictPopover from 'smithing/menus/MenuPredictPopover'
import FormSearchGlobal from 'smithing/forms/search/FormSearchGlobal'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex>
  <Flex
    bottom
    top
    left
    height={1}
    gradient={'turqoise'}
    w={[1,0.2]}
  >
  <Flex direction={['row']} justify='space-evenly' py={15} w={1} >
    <Box ta='center' w={[1, 0.5]} >
      <SVG svg={svg.brain} svgColor='white' w={[25]} height={[25]}  /> 
      <Heading level={[4]} f={[3]} color='white' >
        Charts
      </Heading>
    </Box>
    <Box ta='center' w={[1, 0.5]} >
      <SVG svg={svg.idea} svgColor='white' w={[25]} height={[25]}  /> 
      <Heading level={[4]} f={[3]} color='white' >
        Alerts
      </Heading>
    </Box>
  </Flex>
  
  </Flex>
  <Box w={[1,0.8]} >
    <Flex
    direction={['column', 'row']} align={"stretch"}
    bg={['white']} gradient={'pink'} gradientDir='45deg' 
    bs={[3]} 
    height={'90px'}
    color={['charcoal']}
    pos='relative'
    >

    <Flex align="center" justify='space-evenly'  w={[1, 1, 0.30]} display={['none', 'none', 'flex']} py={[15]} >
      <MenuChatPopover/>
      <MenuPredictPopover/>
    </Flex>

    <Flex align="center"  pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.45]}>


    </Flex>
    <Flex align="center" justify='center' py={[10]} color='white' w={[1, 1, 0.15]} textAlign="center">
      <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
    </Flex>
    
  </Flex>
  
  <Box height={'60px'} >
    
  </Box>

  </Box>


</Flex>