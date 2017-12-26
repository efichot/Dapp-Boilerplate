/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import { UserProfileIdentity } from 'containers'
import { DrawerLink } from 'fusion'

import { ResponibilityRapidResponse, TwilioTextSendUser, UserEdit } from 'workshop/forms'

import { 
  LinkIconSimpleUserContext,
  UserProfileSimple,
  UserProfileAddress,
 } from 'foundry'
import { MenuUserProfileContext } from 'content/menus'
const ProfileMenuMap = props => <Box bg='white' bs={[1]} p={[10]} >{MenuUserProfileContext.map(item=> <LinkIconSimpleUserContext {...item} uid={props.uid} /> )}</Box>


/* ------------------------------- Component -------------------------------- */
const UserProfileDashboard = props => {
return <Absolute left right top bottom align='stretch' h={1} is={Flex} >
  <Box bg='grayLight' w={[1,1, 0.3]} bs={[3]} z={15}>
    <UserProfileSimple {...props} />
    <UserProfileAddress {...props} p={[10]} bg='white' />
    <ProfileMenuMap {...props} />
  </Box>
  <Box bg='white' w={[1,1, 0.7]} p={[15, 20, 35]} >
    <Switch>
      <Route path="/dashboard/users/:uid/rapid-response" component={()=><ResponibilityRapidResponse {...props}/>} />
      <Route path="/dashboard/users/:uid" render={()=><UserEdit {...props} points='test' />} />
    </Switch>
  </Box>
</Absolute>
}

UserProfileDashboard.defaultProps = {

}

export default UserProfileDashboard