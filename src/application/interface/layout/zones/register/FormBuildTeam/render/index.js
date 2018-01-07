/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { images, svg, icons, graphics } from 'assets'
import Absolute from 'atoms/Absolute'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import { FormBase } from 'foundry'
import {
  FieldsEntityName,
  FieldsContact,
  FieldsBiography,
  FieldsMetadata,
} from 'foundry'

import StyleFormDefault from 'static/style/StyleFormDefault'

const TeamMap = [
  {
    title: 'Dinko Dude',
    avatar: graphics.dinko,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Brandon Man',
    avatar: graphics.brandon,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  },
  {
    title: 'Kames Bro',
    avatar: graphics.kames,
    description: 'Praesent feugiat leo diam, quis ultricies ante porta id. In id neque felis. Mauris iaculis egestas velit non suscipit. Sed justo velit, ultricies in sagittis sed, vehicula non elit.'
  }
]

const CheckboxItem = props =>
<Box
  bg='white'
  br={10}
  mb={30}
  mx={20}
  boxShadow={2}
  pb={[20,30]}
  w={[1,0.4255]}
  hover={{
    boxShadow: 5,
    transform: 'scale(1.04)'
  }}
>
  <Flex
    align='center'
    justify='center'
    br={10}
    gradient='blue'
    p={15}
    ml={-20}
    mt={-20}
    height={130} width={130} 
    >
    <Image
      src={props.avatar}
      br={9999}
      b='2px solid #FFF'
    />
  </Flex>

  <Box
    px={[20,30]}
  >
    <Heading level={[3]} f={[4,5]} color='blue' >
      {props.title}
    </Heading>
    <Paragraph f={[1]}>
      {props.description}
    </Paragraph>
  </Box>

</Box>

/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<Absolute left right top bottom >
  <BackgroundImage src={images.cityScraper} o={0.25} />
    <Container w={[980]} py={[50,80]} pb={[50,180]} >
      <Flex>
        <Box
          color='white'
          w={[1, 0.3, 0.3]} p={20}
        >
          <BackgroundGradient gradient='blue' />
          <FormBase {...props}>
            <Box w={[1]} mr={[0,0, '5%']} bs={[0]} mt={[10]} p={[10]}> 
              <Heading level={[3]} f={[3,5,6]} color='white' >Name</Heading>
              <FieldsEntityName {...StyleFormDefault }/>
            </Box>
            <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
          </FormBase>
        </Box>
        <Box height={[500]} p={20} w={[1, 0.7, 0.7]}>
          <BackgroundGradient gradient='blue' o={0.7} />
          <PerfectScrollbar>
          <Flex wrap='wrap' p={35} >
            {
            TeamMap.map(item=> <CheckboxItem {...item}/> ) 
            }
          </Flex>
        </PerfectScrollbar>
        </Box>
      </Flex>
    </Container>
</Absolute>
)
