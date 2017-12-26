/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => <Box w={[1,1, 240]} p={[10,15]} >
  <Heading level={[3]} f={[3]}>How</Heading>
  <Paragraph f={[1]}>Resources are managed by the community. Everyone can start and participate in public resources. Additionally, resources can be kept private with small, focused teams. You decide what's right.</Paragraph>
  <Heading level={[3]} f={[3]}>Add People</Heading>
  <Paragraph f={[1]}>Get people involved in a resource by inviting them directly.</Paragraph>
  <Heading level={[3]} f={[3]}>Raise Funds</Heading>
  <Paragraph f={[1]}>Start raising funds for a resource with direct donations or segmented goals.</Paragraph>
<Paragraph f={[1]}>
  <ul>
    <li>Easily Send Donation Reminders</li>
    <li>Multiple Donation Benchmarks</li>
    <li>Loan Computing Power</li>
  </ul>
</Paragraph>
</Box>