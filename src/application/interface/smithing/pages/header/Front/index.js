/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} pt={[20, 40]} pb={[120]} color='white' textAlign='center' pos='relative' >
  <Flex direction={['column']}  mh={['50vh', '70vh']}justify={['center']} >
    
    <Box w={1} color="white" >
      <Heading fontSize={[5,6,7]} level={3} fontWeight={[300]} mb={10}>
        DEX
      </Heading>
    </Box> 

    <Box>
      <Paragraph fontSize={[2,3]} fontWeight={[100]} ts={[0]} mt={[10,30, 60]} >
        <Button>
          <Link to="/dashboard" >
            Dashboard
          </Link>
        </Button>
      </Paragraph>

    </Box>
  </Flex>
</Section>
