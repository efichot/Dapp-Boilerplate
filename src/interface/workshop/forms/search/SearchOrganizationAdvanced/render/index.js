/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import {
  FieldsOrganizationMetadata
} from 'containers'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled}) => (
<Block {...styled}>
  <Box>
    <Heading level={[3]} f={[3]} mt={[15]}>Name</Heading>
    <Field name="searchOrganizationName" placeholder="Name" component={ReduxField} type="text" />
    <Field name="searchOrganizationNameLegal" placeholder="Legal Name" component={ReduxField} type="text" mt={[10]} />
  </Box>
  <Box>
    <FieldsOrganizationMetadata/>
  </Box>      
  <Box>
    <Heading level={[3]} f={[3]} mt={[15]}>Addresss</Heading>
    <Field name="searchAddressCity" placeholder="City" component={ReduxField} type="text" />
    <Field name="searchAddressCounty" placeholder="County" component={ReduxField} type="text" mt={[10]}/>
    <Field name="searchAddressZip" placeholder="Zip" component={ReduxField} type="text" mt={[10]} />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Block>
)