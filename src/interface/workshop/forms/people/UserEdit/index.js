/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { databaseWriteRequest} from 'store/departments/actions'
import {  fromAuthentication } from 'store/departments/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'


/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({
  pointerEnhanced: 'test'
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {

  }
})


/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, state) => new Promise((resolve, reject) => {

  /*--- Structure Submission Data ---*/
  const address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  const contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  const name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  const biography = _.pickBy(data, (value, key)=> key.startsWith("biography"));

  /* Payload=>Department.Database.Sagas */
  const payload = {
    payload: { /* Payload=>Firebase.Database.Mututate[data.pointer] */
      address,
      biography,
      contact,
      name
    },
    metadata: {
      entity: 'user',
      type: 'update',
      pointer: data.pointer,
      requesting: data.userRequesting,
    }
  }

  /*--- Dispatch | Database Write(Mutate) Request ---*/
  const config = {writeType: 'create'}
  const metadata = {entity: 'mutate', branch: ['request']}
  dispatch(databaseWriteRequest({payload, metadata, config }))
})

const mapStateToProps = (state, props) => {
  const userRequesting = fromAuthentication.getUserId(state)
  const { identity } = props
  if (identity) {
    return {
      initialValues: {
        userRequesting,
        pointer: props.pointer,
        ...identity.address,
        ...identity.name,
        ...identity.contact,
        ...identity.biography,
      }
    }
  }
}

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'UserEdit',
  fields: [
    'userPointer',
    'userRequesting',
    'contactEmail',
    'contactPhone',
    'contactURL',
    'nameDisplay',
    'nameFirst',
    'nameLast',
    'imageProfile',
    'imageBackground',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
const formRedux = reduxForm(config)


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  formRedux,
  queryLifecycle,
  defaultState,
  defaultProps,
)(FormRedux);


// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRender))