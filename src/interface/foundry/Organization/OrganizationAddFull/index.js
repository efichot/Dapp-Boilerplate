/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import {
  FormProjectAdd,
} from 'workshop/forms'

/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[20,40]}>
  <Heading level={[3]} f={[3]}>Add Organization</Heading>
  <FormProjectAdd bg='white' p={[10]} />
</Box>