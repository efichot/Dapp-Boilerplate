/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Paragraph, Link, Section, Shape} from 'atomic'

import {BackgroundImage} from 'foundry'

export default [
  {
    styled: {

    },
    children: [
      <BackgroundImage image={assets.images.culture} />
    ]
  },
  {
    styled: {
      gradient: 'nighthawk',
      gradientDir: '275deg',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[3]} level={[5]} ts={[0]}>Diverse Culture</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Container>
    ]
  },
  {
    styled: {

    },
    children: [
      <BackgroundImage image={assets.images.painting} />
    ]
  },
  {
    styled: {
      gradient: 'blue',
      gradientDir: '275deg',
    },
    children: [
      <Container w={[0.75]}>
        <Heading f={[3]} level={[5]} ts={[0]}>Real People</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Container>
    ]
  },
]