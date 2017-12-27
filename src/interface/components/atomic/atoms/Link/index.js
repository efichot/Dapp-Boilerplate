/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Text, Flex, Box, ButtonOutline, NavLink } from 'particles'
import { Grid } from 'grid-styled'
import { color, fontSize, space, width } from 'styled-system'
import { key } from 'styled-theme'

/* ------------------------- Internal Dependencies -------------------------- */
const borderColor = ({borderColor}) => `${borderColor}`
const bgHover = ({backgroundHover, borderColor}) => backgroundHover ? `${backgroundHover}` : `${borderColor}`
/* --------------------------- Styled Components ---------------------------- */

const Link = styled(LinkRouter)`
  ${color}
  ${space}
  ${width}
`

/* ------------------------- Component Properties --------------------------- */
Link.propTypes = {

}
Link.defaultProps = {
  color: 'white',
  to: '/',
}

/* ------------------------------- Component -------------------------------- */
const Component = ({ ...props }) => {
  return (
    <Link {...props} > {props.children} </Link>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component