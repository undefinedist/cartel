import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Div from './Div'

const Box = styled(Div)(
  [],
  props => ({
    minWidth: 0
  }),
  space,
  fontSize,
  width,
  color
)

Box.defaultProps = {}

export default Box
