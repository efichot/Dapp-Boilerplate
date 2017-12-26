/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
} from 'atomic'
import {
  FormPersonAdd,
} from 'workshop/forms'

/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} w={[1]}>
  <Heading level={[3]} f={[3]}>Add Person</Heading>
  <FormPersonAdd bg='white' p={[10]} />
</Box>