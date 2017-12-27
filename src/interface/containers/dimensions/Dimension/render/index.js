/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dimensions from 'react-dimensions'
/* ------------------------- Internal Dependencies -------------------------- */
import { GraphExample, GraphBlock, MoneroMining } from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */

/* --------------------------- Child Components ----------------------------- */

/* ---------------------------- Module Package ------------------------------ */
class Dimensionify extends Component {
  /*--- Component Mount ---*/
  componentDidMount() {
  }

  /*--- Render ---*/
  render() {
    return (
      <GraphBlock height={this.props.containerWidth /2.3 } width={this.props.containerWidth} />
    )
  }
}
/* ---------------------------- Export Package ------------------------------ */
export default Dimensions()(Dimensionify)
