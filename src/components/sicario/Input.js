import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderColor,
  borderWidth,
  focus,
  borderRadius
} from 'styled-system'

const Input = styled('input')(
  [],
  props => ({
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 'inherit'
  }),
  space,
  fontSize,
  width,
  color,
  borderColor,
  borderWidth,
  focus,
  borderRadius
)

Input.defaultProps = {
  m: 0,
  w: 1,
  px: 2,
  py: 2,
  color: 'inherit',
  bg: 'transparent',
  borderColor: 'gray4',
  borderWidth: 1,
  fontSize: null,
  focus: {
    outline: 0
  },
  borderRadius: 2
}

export default Input
