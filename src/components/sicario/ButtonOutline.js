import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderWidth,
  borderColor
} from 'styled-system'

const ButtonOutline = styled('button')(
  [],
  props => ({
    display: 'inline-block',
    fontFamily: 'inherit',
    borderRadius: '4px',
    appearance: 'none',
    boxSizing: 'border-box'
  }),
  space,
  fontSize,
  width,
  color,
  borderWidth,
  borderColor
)

ButtonOutline.defaultProps = {
  fontSize: 1,
  px: 4,
  py: 2,
  color: 'blue',
  bg: 'transparent',
  borderWidth: 2,
  borderColor: 'currentColor'
}

export default ButtonOutline
