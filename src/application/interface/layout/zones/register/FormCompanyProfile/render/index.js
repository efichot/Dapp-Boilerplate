/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { images } from 'assets'
import { FormBase } from 'foundry'


import { Absolute, BackgroundImage, BackgroundGradient, Container, Paragraph, Flex, Box, Button, Heading, ReduxField }from 'atomic'

import {
  FieldsEntityName,
  FieldsContact,
  FieldsBiography,
  FieldsMetadata,
} from 'foundry'

import StyleFormDefault from 'static/style/StyleFormDefault'

/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<Absolute left right top bottom >
  <BackgroundImage src={images.cityScraper} o={0.25} />
    <Container w={[980]} py={[50,80]} pb={[50,180]} >
      <Flex>
        <Box
        color='white'
          w={[1, 0.3, 0.3]} p={20} >
          <BackgroundGradient gradient='blue' />
          <Heading level={[3]} f={[4,5]} color='white'>
            Company Profile
          </Heading>
          <Paragraph f={[1]}>
            Pellentesque lacus ex, tristique sit amet dui et, tristique vestibulum ipsum. Fusce viverra risus eget velit aliquam, nec vestibulum urna efficitur. Duis tincidunt lacus ac augue blandit, nec mollis massa consectetur.
          </Paragraph>
          <Paragraph f={[1]}>
            Duis tincidunt lacus ac augue blandit, nec mollis massa consectetur. Sed commodo ante eget sapien volutpat condimentum. Phasellus sem sem, pellentesque eget placerat at, lobortis in nulla.
          </Paragraph>
        </Box>
        <Box height={[500]} p={20} w={[1, 0.7, 0.7]}>
          <BackgroundGradient gradient='blue' o={0.7} />
          <PerfectScrollbar>
          <FormBase {...props}>
            <Box w={[1]} mr={[0,0, '5%']} bs={[0]} mt={[10]} p={[10]}> 
              <Heading level={[3]} f={[3,5,6]} color='white' >Name</Heading>
              <FieldsEntityName {...StyleFormDefault }/>
            </Box>
            <Box w={[1]} mr={[0,0, '5%']} bs={[0]} mt={[10]} p={[10]}> 
              <Heading level={[3]} f={[3,5,6]} color='white' >Overview</Heading>
              <FieldsBiography {...StyleFormDefault} />
            </Box>
            <Box w={[1]} mr={[0,0, '5%']} bs={[0]} mt={[10]} p={[10]}> 
              <Heading level={[3]} f={[3,5,6]} color='white' >Contact</Heading>
              <FieldsContact  {...StyleFormDefault}/>
            </Box>
            <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
          </FormBase>
        </PerfectScrollbar>
        </Box>
      </Flex>
    </Container>
</Absolute>
)
