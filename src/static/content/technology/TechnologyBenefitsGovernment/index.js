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
      gradient: 'blueAlge',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[4]} level={[5]} ts={[0]}>Accurate Information</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Container>,
      <BackgroundImage image={assets.images.youthMeeting} z={1} o={[0.5]} />
    ]
  },
  {
    styled: {
      gradient: 'orangeSun',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[4]} level={[5]} ts={[0]}>Localized Activity</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
        <BackgroundImage image={assets.images.marketPeople} z={1} o={[0.5]} />
      </Container>,
    ]
  },
  {
    styled: {
      gradient: 'sherbert',
    },
    children: [
     <Container w={[0.75]}>
        <Heading f={[4]} level={[5]} ts={[0]}>Meaningful Insights</Heading>
        <Paragraph f={[1]} textAlign='center'>Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Container>,
      <BackgroundImage image={assets.images.presenting} z={1} o={[0.5]} />
    ]
  },
]