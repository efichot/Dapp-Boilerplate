/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import {
  ProjectAddFull,
} from 'entity'

import {
    ProjectAddDetails,
} from 'workshop/sections'

/* ------------------------------- Component -------------------------------- */
export default props => (
  <Section gradient='blue' py={[20,60]} >
    <Heading level={[3]} f={[5,6]} color='white' fw='300' ta='center' >Submit Ethereum Project</Heading>
    <Container my={[20,40]} >
      <Flex>
        <Box bg='white' p={[10,20]} w={[1,0.6]}>
          <ProjectAddFull/>
        </Box>
        <Box bg='white' ml={[0,0, '10%']} p={[10,20]} w={[1,0.3]}>
          <ProjectAddDetails/>
        </Box>
      </Flex>
    </Container>
  </Section>
)
