/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import { 
  FrontIntroduction,
  FrontJourney,
  FrontPrograms,
  FrontProjectsActive,
  FrontProjectsSubmit,
} from 'workshop/sections'

import {
  FirestoreListCompose
} from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => (
<div>
  <Shape top left right h={[ '70px', '90px', "125px"]} mt={[-70, -90, -125]} svg={assets.svg.waves} />
  <Shape top left right h={[ '70px', '90px', "125px"]} svg={assets.svg.waves} w={[1]} transform={['rotate(180deg)']} z={0} />
  <FrontProjectsActive/>
  <FrontIntroduction/>
  <FrontJourney/>

  <FirestoreListCompose
    collection={'people'}
    delta='ComposeTests'
    foundry='PersonCard'
    references={['aaX41iYj00M5UfaUXOLFCbAepdF2', 'testing']}
  />
</div>
)
