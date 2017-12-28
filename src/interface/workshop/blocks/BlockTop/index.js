/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { Heading, Paragraph, Span } from 'atomic'

import UserProfile from 'containers/user/UserProfile'

import {MagicBlue} from 'theme/stylesheet/background/BackgroundGradient'

/* --------------------------- Styled Components ---------------------------- */
const Flexy = styled(Flex)`
  overflow: hidden;
`
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const BlockTop = ({ ...props }) => {
  return (
    <Flexy bg={['blueDark']} color={['white']} direction={['column', 'row']} align={"stretch"} justify="center" bs={[0]} z='15' pos='relative' display={['none', 'none', 'flex']}>
      <Flex align="center" w={[0.2]} pl={[15]} py={[7.5]}>
        <Link to="/"><Heading color='white' level={5} margin={'0'} fontSize={[1]} fontWeight={'100'} >News</Heading></Link>
        <Link to="/"><Heading color='white' level={5} margin={'0'} fontSize={[1]} fontWeight={'100'} ml={[10]}>Events</Heading></Link>
        <Link to="/"><Heading color='white' level={5} margin={'0'} fontSize={[1]} fontWeight={'100'} ml={[10]}>Projects</Heading></Link>
        <Link to="/"><Heading color='white' level={5} margin={'0'} fontSize={[1]} fontWeight={'100'} ml={[10]}>Resources</Heading></Link>
      </Flex>
      
      <Flex align="center" w={[0.5]} justify="center" direction={['row']} >
        <Heading f={[1]} level={[5]} fontWeight="300" color="greenLight">Write for CultureCenter News</Heading>
        <Heading f={[1]} level={[5]} fontWeight="300" ml={[5]} >| Join Resource Team </Heading>
        <Heading f={[1]} level={[5]} fontWeight="300" color="yellow" ml={[5]} >| Attend Public Meetings </Heading>
      </Flex>
      <Flex align="center" justify={['flex-end']} pr={[15]} w={[1, 0.2, 0.15]} textAlign="right">

      </Flex>
      <Flex align="center" justify='flex-end' w={[1, 0.1, 0.15]} pr={[10]} >
        <Paragraph f={[1]} mb={0} color="orange" >I.C.E Alerts </Paragraph>
      </Flex>
    </Flexy>
)
}

/* ---------------------------- Export Package ------------------------------ */
export default BlockTop