import React from 'react'
import { Block } from 'particles'

const Button = props => <Block {...props}/>
Button.defaultProps = {
  is: 'button',
  bg: 'indigo',
  br: 2,
  color: 'white',
  f: [1],
  py: [5, 10],
  px: [8, 12.5],
  ts: ['lightHaze'],
}

export default Button
