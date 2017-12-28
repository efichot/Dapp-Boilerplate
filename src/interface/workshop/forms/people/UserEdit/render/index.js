/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import {Button, Flex, Box, Heading, Paragraph, ReduxField, HorizontalRule, Span} from 'atomic'

/*--- Field Elements ---*/
import { NameFieldCollection, ContactFieldCollection, AddressFieldCollection, FieldCollectionPersonBiography } from 'containers/fields'
/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled.form`
  background: #FFF;
  display: block;
  padding: 20px;
`
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <FormWrapper  {...layout} {...props}>
      <Field name="pointer" component={ReduxField} type="hidden" />
      <Heading level={[2]} f={[5]} mb={[15,25]} >Profile - <Span fw='300'>Share With The Community</Span></Heading>
      
      <Heading level={[1]} f={[4]} color='gray' mb={[10]} >Identity</Heading>
      <NameFieldCollection/>
      <ContactFieldCollection mt={[20]} />
      <Heading level={[1]} f={[4]} color='gray' mt={[10]}>Address</Heading>
      <AddressFieldCollection mt={[20]} />
      <Heading level={[1]} f={[4]} color='gray' mt={[10]}>Biography</Heading>
      <FieldCollectionPersonBiography mt={[20]} />

      <HorizontalRule bi='green' my={[10]}/>

      <Heading f={[5]}>Settings</Heading>
      <Heading f={[3]}>Notifications</Heading>
      <Flex direction={['column', 'row']} w={[1]} wrap='wrap' >
        <Box><Field name="notificationText" component={Checkbox} label="SMS" /></Box>
        <Box ml={[0, 10]}><Field name="notificationEmail" component={Checkbox} label="Email" /></Box>
        <Box ml={[0, 10]}><Field name="notificationPhone" component={Checkbox} label="Phone" /></Box>
      </Flex>
      
      <Button type="submit" onClick={handleSubmit} gradient='chery' >Submit</Button>
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
