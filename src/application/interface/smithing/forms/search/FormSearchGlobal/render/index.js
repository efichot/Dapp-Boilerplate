/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Block } from 'particles'
import { Flex, Box, Button, Heading, SVG, ReduxField } from 'atomic'
import { FormBase } from 'foundry'
import StyleFormDefault from 'static/style/StyleFormDefault'

const SearchUnderline = styled(Field)`
  border-bottom: 2px solid #1671af;
`

/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) => (
<FormBase {...props} p={10} >
  <Flex>
    <SearchUnderline name="searchGlobal" placeholder="Global Search" component={ReduxField} type="text"  styledInput={{borderColor:'blue', borderBottom: true}} />
    <SVG svg={assets.svg.uiSearch} svgColor='aqua' w={[25]} height={[25]}  /> 
  </Flex>
</FormBase>
)