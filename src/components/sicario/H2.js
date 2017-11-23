import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const H2 = styled('h2')(
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

H2.defaultProps = {
  fontWeight: '600'
}

export default H2
