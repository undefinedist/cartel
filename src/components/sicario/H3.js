import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const H3 = styled('h3')(
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

H3.defaultProps = {
  fontWeight: '600'
}

export default H3
