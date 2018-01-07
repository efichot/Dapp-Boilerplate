/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { graphics } from 'assets'
import Paragraph from 'atoms/Paragraph'
import Image from 'atoms/Image'
import Section from 'atoms/Section'
import Container from 'atoms/Container'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  gradient='blue'
  py={[30,60,120]}
  {...props}
>
  <Container textAlign={['center']} w={[1,1, 720]} >
    <Image src={graphics.logo} w={[155]} mb={[10]} />
    <Paragraph f={[2]}>Open Source The World</Paragraph>
  </Container>
</Section>
