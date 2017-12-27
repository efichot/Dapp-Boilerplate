const { breaks, idx, merge, arr, dec, media } = require('./util')

const REG = /^boxShadow|bs$/

module.exports = props => {
  const keys = Object.keys(props).filter(key => REG.test(key))
  const bp = breaks(props)
  const shadows = idx([ 'theme', 'shadows' ], props) || {}

  return keys.map(key => {
    const val = arr(props[key])
    const prop = properties[key] || key
    return val
      .map(cx(shadows))
      .map(dec(prop))
      .map(media(bp))
      .reduce(merge, {})
  }).reduce(merge, {})
}

const cx = obj => n => idx(getKeys(n), obj) || n
const getKeys = n => typeof n === 'string' ? n.split('.') : [ n ]

const properties = {
  bs: 'boxShadow'
}



// transition: all 0.3s cubic-bezier(.25,.8,.25,1);

// const shadowRendered = props => 
//   props.shadow >= 0
//   ? props.shadowHover
//     ? `box-shadow: ${props.theme.shadows[props.shadow].default}; transition: all 0.3s cubic-bezier(.25,.8,.25,1); &:hover {box-shadow:${props.theme.shadows[props.shadow].hover}};` 
//     : `box-shadow: ${props.theme.shadows[props.shadow].default};` 
//   : null