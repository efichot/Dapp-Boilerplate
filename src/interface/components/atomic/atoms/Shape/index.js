/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { fill, boxShadow, gradient, height, space, width } from 'quarks'
import { Absolute } from 'particles'
import { SVG } from "atomic"
/* ------------------------- Internal Dependencies -------------------------- */
const svg = props => `${props.image}`

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled(Absolute)`
  overflow: hidden;
  z-index: 10;
  svg {
    height: 100%;
    width: 100%;
  }

  ${boxShadow}
  ${height}
  ${gradient}
  ${fill}
  ${space}
  ${width}
  display: inline-block;
    & svg {
      ${height}
      ${fill}
      ${width}
    }

`

Wrapper.defaultProps = {

}

/* ------------------------- Component Properties --------------------------- */

/* ------------------------------- Component -------------------------------- */
const BackgroundImageWrapper = props => (
    <Wrapper {...props} p={[0]} >
      <SVG svg={props.svg} />
    </Wrapper>
  )

/* ---------------------------- Export Package ------------------------------ */
export default BackgroundImageWrapper