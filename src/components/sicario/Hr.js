import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderRadius,
  borderWidth
} from 'styled-system'

const Hr = styled('hr')(
  [],
  props => ({
    height: 0
  }),
  space,
  fontSize,
  width,
  color,
  borderRadius,
  borderWidth
)

Hr.defaultProps = {
  bg: 'transparent',
  color: 'black',
  pl: 0,
  pr: 0,
  pb: 0,
  borderRadius: 0,
  borderWidth: 1,
  borderTop: true
}

export default Hr
