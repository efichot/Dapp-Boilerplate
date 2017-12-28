/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Block } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import normalizePhone from 'logic/forms/normalize/phone'
import { ReduxField } from 'atomic'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = Block

FormWrapper.defaultProps = {
  is: 'form'
}

/* ---------------------------- Form Component ------------------------------ */
const FormElements = ({ handleSubmit, isSubmitting, layout } ) => {
  if(isSubmitting) return <div>Search</div>
  return (
    <FormWrapper  {...layout}>
      <Box className='formProps' >
        <Field name="hidden"component={ReduxField} type="hidden" />
      </Box>
      
      <Box className='form' >
        <Box>
          <Heading level={[3]} f={[3]} mt={[15]}>Name</Heading>
          <Field name="searchNameFirst" placeholder="First Name" component={ReduxField} type="text" />
          <Field name="searchNameLast" placeholder="Last Name" component={ReduxField} type="text" mt={[10]} />
        </Box>
        <Box>
          <Heading level={[3]} f={[3]} mt={[15]}>Contact Information</Heading>
          <Field name="searchContactEmail" placeholder="Email" component={ReduxField} type="text" />
          <Field name="searchContactPhone" placeholder="Phone" component={ReduxField} type="text" mt={[10]} normalize={normalizePhone} />
        </Box>
        <Box>
          <Heading level={[3]} f={[3]} mt={[15]} >Biography</Heading>
          <Field name="searchBiographyOccupation" placeholder="Job" component={ReduxField} type="text" />
          <Field name="searchBiographySkills" placeholder="Skills" component={ReduxField} type="text" mt={[10]} />
        </Box>
      
        <Box mt={10} >
          <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
        </Box>
      </Box>

    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
}

export default FormElements
