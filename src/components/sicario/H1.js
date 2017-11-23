import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const H1 = styled('h1')(
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

H1.defaultProps = {
  fontWeight: '600'
}

export default H1
