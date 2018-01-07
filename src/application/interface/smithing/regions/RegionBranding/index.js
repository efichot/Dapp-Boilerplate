/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import Flex from 'atoms/Flex'
import Absolute from 'atoms/Absolute'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Image from 'atoms/Image'
import SVG from 'atoms/SVG'

import DrawerOpen from 'containers/drawer/DrawerOpen'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex>
  <Absolute
    bottom
    top
    left
    height={1}
    gradient={'blue'}
    w={[1,0.1]}
  >
  
  </Absolute>
  <Box w={[1,0.9]} ml={'10%'} >
    <Flex
    direction={['column', 'row']} align={"stretch"} justify="center"
    bg={['white']} gradient={['white']} gradientDir='45deg' 
    bs={[3]} 
    height={'60px'}
    color={['charcoal']}
    pos='relative'
    >
    <Flex align="center" justify="left" w={[1, 1, 0.18]} pl={[15]} py={[7]} direction={['row']} >
      <Link to="/"><Heading color={'blue'} level={4} margin={'0'} fontSize={[3,4]} fontWeight={'100'}>DEX</Heading></Link>
    </Flex>
    
    <Flex align="center" w={[1, 1, 0.40]} justify="flex-start" display={['none', 'none', 'Flex']} py={[15]} >

    </Flex>

    <Flex align="center"  pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.35]}>

    </Flex>
    <Flex align="center" justify='center' gradient={['blue']} py={[10]} color='white' w={[1, 1, 0.07]} textAlign="center">
      <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
    </Flex>
    
  </Flex>
  
  <Box height={'60px'} >
    <Heading level={[3]} f={[3]}>
      Heading 1
    </Heading>
  </Box>

  </Box>


</Flex>