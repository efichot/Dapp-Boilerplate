/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* ------------------------- Internal Dependencies -------------------------- */

/* ------------------------ Initialize Dependencies ------------------------- */

/* --------------------------- Child Components ----------------------------- */

/* ---------------------------- Module Package ------------------------------ */
class Container extends Component {

  /*--- Property Types ---*/
  static propTypes = {
    loading: PropTypes.bool
  }

  /*--- Default Properties ---*/
  static defaultProps = {
    loading: true
  }

  /*--- Component Mount ---*/
  componentDidMount(props) {
  }

  /*--- Render ---*/
  render() {
    return (
    <div>
      yoooo
    </div>
    )
  }
}
/* ---------------------------- Export Package ------------------------------ */
export default Container
