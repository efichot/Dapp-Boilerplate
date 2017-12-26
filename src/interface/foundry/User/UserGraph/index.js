/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import { UserProfileIdentity } from 'containers'
import { DrawerLink } from 'fusion'
import { LinkIconSimple } from 'foundry'
import { MenuProfileDashboard } from 'content/menus'


import query from 'apollo/query/User.gql'
import { GraphRequest } from 'containers'
const ProfileMenuMap = <Box bg='white' bs={[1]} p={[10]} >{MenuProfileDashboard.map(item=> <LinkIconSimple {...item}/> )}</Box>
/* ------------------------------- Component -------------------------------- */
const UserProfileDashboard = props => (
<Absolute left right top bottom align='stretch' h={1} is={Flex} >
  <Box bg='grayLight' w={[1,1, 0.3]} >
    <UserProfileIdentity/>
    <GraphRequest 
      query='user'
      gql={query}
      variables={{uid:props.uid, boundaries:{limitToLast: 10}, order: {reverse: true}}}
      itemStyled={{
        w: [1, 0.50]
      }}/>
    {ProfileMenuMap}
  </Box>
  <Box bg='white' w={[1,1, 0.7]} >
    <Heading f={[]} level={[]}>Info</Heading>
  </Box>
</Absolute>)

UserProfileDashboard.defaultProps = {

}

export default UserProfileDashboard