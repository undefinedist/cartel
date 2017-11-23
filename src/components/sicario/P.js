import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const P = styled('p')(
  [],
  props => ({
    maxWidth: `${props.wide ? '34em' : '28em'}`,
    lineHeight: '1.5'
  }),
  space,
  fontSize,
  width,
  color
)

P.defaultProps = {}

export default P
