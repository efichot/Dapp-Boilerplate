/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundImage, Heading, Image, Paragraph, Section, Span} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => (
<Section>

     <Flex justify={['space-evenly']}>
       <Flex align={['center']} justify={['center']} direction={['column']}  bg={['blue']} color={['white']} w={[1,1, 0.33333333333]} pos='relative' px={[20,30]}>
         <Box z={15} pos='relative' textAlign={['center']} >
         <Heading f={[]} level={[2]} ts={[0,1]}>Youth Programs</Heading>
         <Paragraph f={[]}>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
         </Box>
         <BackgroundImage image={assets.images.adventure} z={1} o={[0.2]} />
       </Flex>
       <Flex align={['center']} justify={['center']} direction={['column']}  bg={['turquoise']} color={['white']} h={[350]} w={[1,1, 0.33333333333]} pos='relative' px={[20,30]}>
         <Box z={15} pos='relative' textAlign={['center']} >
         <Heading f={[]} level={[2]} ts={[0,1]}>Community Partnerships</Heading>
         <Paragraph f={[]}>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
         </Box>
         <BackgroundImage image={assets.images.cmcm} z={1} o={[0.2]} />
       </Flex>
       <Flex align={['center']} justify={['center']} direction={['column']}  bg={['green']} color={['white']} w={[1,1, 0.33333333333]} pos='relative' px={[20,30]} >
         <Box z={15} pos='relative' textAlign={['center']} >
         <Heading f={[]} level={[2]} ts={[0]} >Social Justice</Heading>
         <Paragraph f={[]}>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
         </Box>
         <BackgroundImage image={assets.images.justice} z={1} o={[0.2]} />
       </Flex>
     </Flex>
     
   </Section>
  )
