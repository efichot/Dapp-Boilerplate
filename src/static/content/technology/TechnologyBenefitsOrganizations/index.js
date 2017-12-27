/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'particles'
import {BackgroundImage, BackgroundGradient, Container, Heading, Paragraph, Link, Section, Shape} from 'atomic'


export default [
  {
    styled: {
      gradient: 'violet',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[4]} level={[5]} ts={[0]}>Information</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Container>,
      <BackgroundImage image={assets.images.writing} z={1} o={[0.5]} />
    ]
  },
  {
    styled: {
      gradient: 'greenLeaf',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[4]} level={[5]} ts={[0]}>Networking</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
        <BackgroundImage image={assets.images.organizers} z={1} o={[0.5]} />
      </Container>,
    ]
  },
  {
    styled: {
      gradient: 'blueSky',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[4]} level={[5]} ts={[0]}>Mobilize</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Container>,
      <BackgroundImage image={assets.images.rally} z={1} o={[0.5]} />
    ]
  },
]