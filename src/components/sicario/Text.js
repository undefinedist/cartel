import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Text = styled('div')(
  [],
  props => ({}),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Text.defaultProps = {
  fontWeight: '600'
}

export default Text
