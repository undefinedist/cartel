import styled from 'styled-components'
import { space, fontSize, width, color, hover } from 'styled-system'

const A = styled('a')(
  [],
  props => ({
    textAlign: `${props.center ? 'center' : 'left'}`,
    textDecoration: `${props.underline ? 'underline' : 'none'}`,
    opacity: 1,
    transition: 'opacity .3s ease-in',
    display: 'inline-block'
  }),
  space,
  fontSize,
  width,
  color,
  hover
)

A.defaultProps = {
  color: 'inherit',
  hover: {
    opacity: 0.66,
    transition: 'opacity .25s ease-in'
  }
}

export default A
