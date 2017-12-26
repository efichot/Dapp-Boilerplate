/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
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
  LinkIconContext,
  PersonProfileInterfaceBiography,
  PersonProfileInterfaceIdentity
} from 'foundry'
import {
  FormPersonEdit,
} from 'workshop/forms'
import {
  MenuPersonProfile
} from 'content/menus'
const ProfileMenuMap = props => <Box bg='white' bs={[1]} p={[10]} >{MenuPersonProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>

/* ------------------------------- Component -------------------------------- */

export default props => <div>
  <Absolute top left gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
    <PersonProfileInterfaceIdentity {...props} w={1} />
    {!props.id ? null : <ProfileMenuMap {...props} />}
  </Absolute>
  <Absolute top bottom right bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
      <PerfectScrollbar>
        {!props.data ? null : <Route exact path="/dashboard/:entity/:eid" component={EntityProfileMap}/> }
      <Box p={[20,35]}>
        {!props.data ? null : <Route path="/dashboard/:entity/:eid/edit" component={FormPersonEdit}/> }
        {!props.data ? null : <Route exact path="/dashboard/:entity/:eid" component={()=><PersonProfileInterfaceBiography {...props} w={1} />} />}
      </Box>
    </PerfectScrollbar>
  </Absolute>
</div>