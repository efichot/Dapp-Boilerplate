/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'


/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

import ReduxField from 'organisms/ReduxField'

import {
  NameFieldCollection,
  ContactFieldCollection,
  AddressFieldCollection,
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
      <NameFieldCollection wrap='wrap' {...wrapperStyle} fieldStyle={fieldStyle} />
      <ContactFieldCollection wrap='wrap' mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
      <AddressFieldCollection mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
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
