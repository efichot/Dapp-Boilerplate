/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction='column' wrap='wrap' {...props.styledWrapper}>
    <Flex {...props.styledFieldOuter} >
      <Field 
        name="nameDisplay"
        placeholder="Name"
        component={ReduxField}
        type="text"
        color='blue'
        mh={50}
        f={[4]}
        fw='700'
        {...props}
      />
    </Flex>
    <Flex {...props.styledFieldOuter} >
      <Field
        name="nameAlias"
        placeholder="Alias (Codename)"
        component={ReduxField}
        type="text"
        color='gray' 
        mh={30}
        f={[1]}
        {...props}
      />
    </Flex>
  </Flex>
)