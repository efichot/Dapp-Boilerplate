/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

import ReduxField from 'organisms/ReduxField'

import {
  FieldsAddress,
  FieldsContact,
  FieldsPersonName,
  FieldsPersonBiography,
  ContactFieldCollection,
  AddressFieldCollection,
  FieldsResourceMetadata,
} from 'containers'
/* --------------------------- Styled Components ---------------------------- */
const fieldStyle = {
  w: 1,
  mb: [10]
}
const wrapperStyle = {
  mb: [10]
}
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, match } = props

  return (
    <Box {...props}>
      <Box w={[1]} mt={[15,25]} bs={[0]} p={[10,15,25]}>
        <Heading level={[3]} f={[3]}>Name</Heading>
        <FieldsPersonName wrap='wrap' mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
      </Box>
      <Box w={[1]} mt={[15,25]} bs={[0]} p={[10,15,25]}>
        <Heading level={[3]} f={[3]}>Biography</Heading>
        <FieldsPersonBiography wrap='wrap' mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
      </Box>
      <Box w={[1]} mt={[15,25]} bs={[0]} p={[10,15,25]}>
        <Heading level={[3]} f={[3]}>Contact</Heading>
        <FieldsContact wrap='wrap' mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
        <Heading level={[3]} f={[3]}>Address</Heading>
        <FieldsAddress mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
      </Box>
      <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
    </Box>
  )
}

FormElements.defaultProps = {
  is: "form",
}
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
