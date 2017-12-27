/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Block } from 'particles'
/* --------------------------- Styled Component ----------------------------- */
const Span = props => <Block {...props} />
Span.defaultProps = {
  is: 'p',
  mb: 10,
}
export default Span