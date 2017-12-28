/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundImage, Heading, Image, Paragraph, Section, Span} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => (
  <Section of='hidden' >
    <Flex justify={['space-evenly']}>
      <Box w={[1,1, 0.25]}  pos="relative" gradient="blueAlge">
        <BackgroundImage image={assets.images.keyboard} o={[0.8]}/>
      </Box>
      <Flex align={['center']} justify={['center']} direction={['column']} gradientDir='275deg' gradient={['blueLagoon']} color={['white']} py={[50,125]} px={[20]} w={[1,1, 0.25]} >
        <Heading f={[3]} level={[5]} ts={[0]}>A Strong Community</Heading>
        <Paragraph f={[1]} textAlign='center' >Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Flex>
      <Box w={[1,1, 0.25]}  pos="relative"  gradient="ibize">
        <BackgroundImage image={assets.images.terminalLinux} o={[0.8]} />
      </Box>
      <Flex align={['center']} justify={['center']} direction={['column']} gradientDir='-275deg' gradient={['easyMed']} color={['white']} py={[50,125]} px={[20]} w={[1,1, 0.25]} >
        <Heading f={[3]} level={[5]} ts={[0]}>Clear Vision</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.y</Paragraph>
      </Flex>
    </Flex>
    <Flex justify={['space-evenly']}>
      <Flex align={['center']} justify={['center']} direction={['column']} gradientDir='275deg'  gradient={['blue']} color={['white']} py={[50,125]} px={[20]} w={[1,1, 0.25]} >
        <Heading f={[3]} level={[5]} ts={[0]}>Real People</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Flex>
      <Box w={[1,1, 0.25]}  pos="relative" gradient="cherry" >
        <BackgroundImage image={assets.images.hardrive} ratio={1} o={[0.8]} />
      </Box>
      <Flex align={['center']} justify={['center']} direction={['column']} gradientDir='-90deg'  gradient={['lime']} color={['white']} py={[50,125]} px={[20]} w={[1,1, 0.25]} >
        <Heading f={[3]} level={[5]} ts={[0]}>Grassroots Organizing</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Flex>
      <Box w={[1,1, 0.25]} pos="relative" gradient="purple">
        <BackgroundImage image={assets.images.hacker} ratio={1/3}  o={[0.8]}/>
      </Box>
    </Flex>
  </Section>
   )
