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
</Block>
)