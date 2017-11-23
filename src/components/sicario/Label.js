import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Label = styled('label')(
  [],
  props => ({
    display: 'block'
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Label.defaultProps = {
  fontSize: 1,
  fontWeight: '600'
}

export default Label
