/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Span from 'atoms/Span'

/*-* Containers *-*/
import UserProfile from 'containers/user/UserProfile'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Flex gradient={'blue'} color={['white']} direction={['column', 'row']} align={"stretch"} justify="center" bs={[0]} z='15' pos='relative' display={['none', 'none', 'flex']}>
  <Flex align="center" w={[0.2]} pl={[15]} py={[7.5]}>
    <Link to="/content/why" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>About</Heading></Link>
    <Link to="/content/why" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Contact</Heading></Link>
    <Link to="/content/tools" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Press</Heading></Link>
    <Link to="/content/community" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Team</Heading></Link>
  </Flex>
  
  <Flex align="center" w={[0.5]} justify="center" direction={['row']} >

  </Flex>
  <Flex align="center" justify={['flex-end']} pr={[15]} w={[1, 0.2, 0.15]} textAlign="right">

  </Flex>
  <Flex align="center" justify='flex-end' w={[1, 0.1, 0.15]} pr={[10]} >
    <Paragraph f={[1]} mb={0} m={0}>Secret Door</Paragraph>
  </Flex>
</Flex>
