/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute } from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import {
  EntityProfileMap,
  MapAdvancedCompose,
  LinkIconContext,
  OrganizationProfileInterfaceIdentity,
  OrganizationProfileInterfaceBiography
} from 'foundry'
import {
  FormOrganizationEdit
} from 'workshop/forms'

import {
  MenuOrganizationProfile
} from 'content/menus'
const ProfileMenuMap = props => <Box bg='white' bs={[1]} p={[10]} >{MenuOrganizationProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>

/* ------------------------------- Component -------------------------------- */
export default props => (
<div>
  <Absolute top left gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
    <OrganizationProfileInterfaceIdentity {...props} w={1} />
    {!props.id ? null : <ProfileMenuMap {...props} />}
  </Absolute>
  <Absolute top right bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} p={[20,35]}  w={[1,1, 0.77]}>
    {!props.name ? null : <Route exact path="/dashboard/organization/:eid" component={EntityProfileMap}/> }
    {!props.name ? null : <Route path="/dashboard/organization/:eid/edit" component={FormOrganizationEdit}/> }
    <OrganizationProfileInterfaceBiography {...props} w={1} />
  </Absolute>
</div>
)