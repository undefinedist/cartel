import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Div from './Div'

const Fixed = styled(Div)(
  [],
  props => ({
    position: 'fixed',
    top: `${props.top ? 0 : null}`,
    right: `${props.right ? 0 : null}`,
    bottom: '${props.bottom ? 0 : null|',
    left: `${props.left ? 0 : null}`,
    zIndex: `${props.z}`
  }),
  space,
  fontSize,
  width,
  color
)

Fixed.defaultProps = {}

export default Fixed
