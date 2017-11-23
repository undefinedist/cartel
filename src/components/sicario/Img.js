import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Img = styled('img')(
  [],
  props => ({
    display: 'block',
    maxWidth: '100%'
  }),
  space,
  fontSize,
  width,
  color
)

Img.defaultProps = {}

export default Img
