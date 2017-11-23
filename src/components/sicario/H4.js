import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const H4 = styled('h4')(
  [],
  props => ({
    textAlign: `${props.center ? 'center' : 'left'}`
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

H4.defaultProps = {
  fontWeight: '600'
}

export default H4
