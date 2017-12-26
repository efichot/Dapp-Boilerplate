/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import normalizePhone from 'logic/forms/normalize/phone'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled}) => (
<Block {...styled}>
  <Box>
    <Field name="statusUpdateBody" placeholder="Write about recent project updates and accomplishments." component={ReduxField} type="textarea" />
    <Button type="submit" onClick={handleSubmit} gradient='cherry' w={1}>Add Resource Update</Button>
  </Box>
</Block>
)