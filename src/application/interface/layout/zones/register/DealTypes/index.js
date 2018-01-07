/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { images, svg, icons } from 'assets'
import Absolute from 'atoms/Absolute'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'


const FlexAbsolute = styled(Absolute)`
  display: flex;
  align-center: center;
  align-items: center;
  justify-content: center;
`

const BackgroundTransform = styled(BackgroundGradient)`
  transform-origin: 65% 17%;
`

const DealTypeMap = [
  {
    title: 'City Buildings',
    icon: icons.buildingTitled,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Gas Stations',
    icon: icons.gasStation,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Supermarket',
    icon: icons.supermarket,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Apartments',
    icon: icons.apartment,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Mansions',
    icon: icons.mansion,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Office Buildings',
    icon: icons.buildingRadar,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Town Houses',
    icon: icons.townHouse,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Parking Garage',
    icon: icons.buildingParking,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Hospital',
    icon: icons.hospital,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
]

const CheckboxItem = props =>
<Box
  bg='white'
  br={10}
  mb={120}
  mx={10}
  boxShadow={2}
  px={[20,30]}
  pb={[20,30]}
  w={[1,0.5,0.30]}
  hover={{
    boxShadow: 5,
    transform: 'scale(1.04)'
  }}
>
  <Box
    br={10}
    gradient='blue'
    mt={[-50, -80]}
    p={15}
    height={130} width={130} 
    >
    <SVG svg={props.icon} svgColor='white' />
  </Box>

  <Heading level={[3]} f={[4,5]} color='blue' >
    {props.title}
  </Heading>
  <Paragraph f={[1]}>
    {props.description}
  </Paragraph>

</Box>

/* ---------------------------- Module Package ------------------------------ */
export default props =>
<Absolute left right top bottom>
<BackgroundImage src={images.lockBox} o={0.25} />
<PerfectScrollbar>
  <Container w={[1120]} pb={[60,70]} pt={[100,170]} >
    <Flex wrap='wrap'>
      {
      DealTypeMap.map(item=> <CheckboxItem {...item}/> ) 
      }
    </Flex>
    <Button
      f={[3,4]}
      gradient='cherry'
      py={15}
      w={1}
    >Submit Deal Types</Button>
  </Container>
</PerfectScrollbar>
</Absolute>