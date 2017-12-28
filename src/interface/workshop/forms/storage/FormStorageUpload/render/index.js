/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import { Button, ReduxField } from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled.form`
  background: #FFF;
  display: block;
  padding: 20px;
`
/** 
 * File input workarround:
 * More info: http://redux-form.com/5.2.5/#/examples/file?_k=57hmlw
 */
const customFileInput = (field) => {
  delete field.input.value; // <-- just delete the value property
  return <input type="file" id="file" {...field.input} />;
};


/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props, fields) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
        <Field name="storageUpload" component={customFileInput } type="file" />
      
      <div><Button type="submit">Submit</Button></div>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
