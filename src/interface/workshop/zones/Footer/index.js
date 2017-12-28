/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import Login from 'workshop/forms/authentication/AuthorizationLogin'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Section
  color='white'
  gradient='blue'
  py={[30,60,120]}
  {...props}>
    <Container textAlign={['center']} w={[1,1, 720]} >
      <Heading f={[5,6]} level={[3]} color={['blueLight']} fontWeight={[700]} >Join The Community</Heading>
      <Paragraph f={[]}>Start building, organizing and using Ethereum solutions today. </Paragraph>
      <Login f={3} px={[20,25]} py={[10,15]} gradient='cherry' children='Login/Register'  />
    </Container>
</Section>
)