import styled from 'styled-components'
import { space, fontSize, width, color, borderRadius } from 'styled-system'
import Button from './Button'

const ButtonCircle = styled(Button)(
  [],
  props => ({}),
  space,
  fontSize,
  width,
  color,
  borderRadius
)

ButtonCircle.defaultProps = {
  pl: 3,
  pr: 3,
  borderRadius: 999999
}

export default ButtonCircle
