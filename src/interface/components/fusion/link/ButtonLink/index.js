import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Button } from 'atomic'

const ButtonLink  = props => <Link {...props.link}><Button {...props.button}>{props.children}</Button></Link>

Link.defaultProps = {
  to: '/'
}

export default ButtonLink
