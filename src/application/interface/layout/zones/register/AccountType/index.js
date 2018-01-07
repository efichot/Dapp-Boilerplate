/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { images } from 'assets'
import Absolute from 'atoms/Absolute'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'


const FlexAbsolute = styled(Absolute)`
  display: flex;
  align-center: center;
  align-items: center;
  justify-content: center;
`

const BackgroundTransform = styled(BackgroundGradient)`
  transform-origin: 65% 17%;
`

/* ---------------------------- Module Package ------------------------------ */
export default props =>  
<FlexAbsolute left right top bottom height={1} >
  <Flex align='center' justify='center' width={0.5} height={1} >
    <BackgroundImage src={images.homesStreet} o={0.25} />
    <BackgroundGradient gradient='purpleBlue' o={0.25} />
    <Container color='white' w={[0.45]} pos='relative' hover={{transform: 'scale(1.025)' }} >
      <BackgroundTransform gradient='blue' o={0.85} height={400} width={400} transform='rotate(45deg)'  />
      <Heading level={[3]} f={[6,7]} ts='light' color='white' >
        BROKER
      </Heading>
      <Paragraph f={[1]}>
        Sed vitae quam ultricies ex ultricies dapibus. Nunc sit amet congue dui. Morbi luctus dui sit amet odio facilisis, volutpat lacinia leo ullamcorper. Sed venenatis tristique lorem, nec tincidunt lorem scelerisque sed.
      </Paragraph>
      <Button gradient='cherry'>Select Broker Account</Button>
    </Container>
  </Flex>
  <Flex align='center' justify='center' width={0.5} height={1} >
    <BackgroundImage src={images.newYork} o={0.25} />
    <BackgroundGradient gradient='blue' o={0.25} />
    <Container color='white' w={[0.45]} pos='relative'  hover={{transform: 'scale(1.025)' }} >
      <BackgroundTransform gradient='blue' o={0.85} height={475} width={475} br={999999} transform='rotate(45deg)'  />
      <Heading level={[3]} f={[6,7]} ts='purpleDark' color='white' >
        LENDER
      </Heading>
      <Paragraph f={[1]}>
        Sed vitae quam ultricies ex ultricies dapibus. Nunc sit amet congue dui. Morbi luctus dui sit amet odio facilisis, volutpat lacinia leo ullamcorper. Sed venenatis tristique lorem, nec tincidunt lorem scelerisque sed.
      </Paragraph>
      <Button gradient='cherry'>Select Lender Account</Button>
    </Container>
  </Flex>
  <BackgroundGradient gradient='blue' w={10} o={1} z={100} mx='auto' />
</FlexAbsolute>

