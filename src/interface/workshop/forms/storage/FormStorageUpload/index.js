/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { storageUploadFileRequest } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  const metadata = {
    delta: 'fileUpload',
  }
  dispatch(storageUploadFileRequest({payload: data.storageUpload, metadata}))
})

const mapStateToProps = (state) => ({
  initialValues: {}
})

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'FormStorageUpload',
  fields: [
    '',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRender))
