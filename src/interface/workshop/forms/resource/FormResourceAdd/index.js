/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import {
  entityResourceAddRequest
} from 'store/departments/actions'

import { selectPersonPublic } from 'store/departments/database/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  /*--- Setup ---*/
  const submission = {}

  /*--- Extraction ---*/
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  submission.address = _.pickBy(data, (value, key)=> key.startsWith("address"));

  /*--- Payload ---*/
  const payload = submission

  /*--- Metadata/Configuration ---*/
  const metadata = {
    delta: 'resourceAdd',
    collection: 'resources',
    trigger: 'resourceFilter',
  }
  
  dispatch(entityResourceAddRequest({payload, metadata }))
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
})

/* ----------------------------- React Redux -------------------------------- */
const mapStateToProps = (state, props) => {

  return {
    initialValues: {

    }
  }
}

const mapDispatchToProps = dispatch => ({

})

const config = {
  form: 'FormResourceAdd',
  fields: [
    'nameFirst',
    'nameLast',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRedux))
