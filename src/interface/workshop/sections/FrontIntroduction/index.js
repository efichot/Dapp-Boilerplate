/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => (
<Section {...props} bg="white" color={['charcoal']} pos="relative" pb={[20, 40, 80]} pt={[70, 100,140]} px={[20]} bs={['insetBottom']} z={[15]} pos='relative' >
  <Container textAlign='center' w={[720]} >
    <Heading f={[5,6,7]} level={[2]} color={'blue'} mt={[10, 20]}>
      Community Is The Answer
      </Heading>
    <Paragraph f={[2]} color={['charcoal']}>
      <strong>Real people are the answer to complex challenges.</strong>
    </Paragraph>
  </Container>
  <Container>
    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2,2, 1]} px={[10, 20, 40]} >
        <Paragraph f={[3]} color='blue' fontWeight={[300]} ><strong>Relationships are the foundation of life.</strong> The pack is on a steadfast mission to connect the diverse Ethereum Community for sustained community well-being.</Paragraph>
        <Heading f={[3]} level={[2]} color={'indigo'} mt={[0]}>For The People. By The People.</Heading>
        <Paragraph f={[]}>Life, liberty and the pursuit of happiness. Granted to those who seek to unite and overcome today and tomorrow's growing challenges collectively. We have the power to solve challenges, both large and small, but first we have to unite communities, build relationships and create new models of self-empowerment.</Paragraph>
        <Heading f={[3]} level={[2]} color={'green'} mt={[0]}>A United Community - The Real Democracy</Heading>
        <Paragraph f={[]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields. Together, we can support and sustain the foundation required to solve real people challenges.</Paragraph>
      </Box>
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1,1, 2]} >
        <Image src={assets.images.moonPeople} b={'2px solid #FFF'} br={5} bs={3}  />
      </Box>
    </Flex>
  </Container>
</Section>
)
