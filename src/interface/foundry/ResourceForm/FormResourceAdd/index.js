/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import _ from 'lodash'
import filterKeys from 'filter-keys'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import {
  entityResourceAddRequest
} from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  /*--- Setup ---*/
  const submission = {}

  /*--- Extraction ---*/
  submission.address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  submission.biography = _.pickBy(data, (value, key)=> key.startsWith("biography"));
  submission.contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  submission.meta = _.pickBy(data, (value, key)=> key.startsWith("meta"));
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));

  /*--- Dispatch ---*/
  dispatch(entityResourceAddRequest({
    payload: submission,
    metadata: {
      branch: [
        'resources'
      ],
      delta: 'ResourceAdd',
      trigger: 'ResourceSearch',
    }
  }))
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  'nameResource': required,
  'nameResourceAlias': required,
})


const config = {
  form: 'FormResourceAdd',
  fields: [
    'nameResource',
    'nameResourceAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

export default connect()(reduxForm(config)(FormRedux))
