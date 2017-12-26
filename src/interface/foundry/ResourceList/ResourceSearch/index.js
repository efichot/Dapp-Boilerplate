/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import forms, {
  SearchResourceAdvanced
} from 'workshop/forms'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} >
  <Heading level={[3]} f={[3]}>Resource Search</Heading>
  <HorizontalRule bi='colorBase' bs={1} w={[1]} />
  <SearchResourceAdvanced/>
</Box>