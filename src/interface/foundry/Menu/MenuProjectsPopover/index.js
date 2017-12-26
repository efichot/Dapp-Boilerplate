/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import { PopoverPure } from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props => <Flex diretion={['column', 'row']} >
  <Box px={[10]}>
    <PopoverPure delta='MenuProject' foundry={'MenuProjectsPopoverDescription'} >
      <Heading level={[3]} f={[3]} >Projects</Heading>
    </PopoverPure>
    </Box>
</Flex>