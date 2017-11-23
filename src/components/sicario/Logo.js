import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Img from './Img'

const Logo = styled(Img)(
  [],
  props => ({
    height: '36px'
  }),
  space,
  fontSize,
  width,
  color
)

Logo.defaultProps = {}

export default Logo
