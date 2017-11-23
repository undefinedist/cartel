import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Container = styled('div')(
  [],
  props => ({
    maxWidth: '64em',
    boxSizing: 'border-box'
  }),
  space,
  fontSize,
  width,
  color
)

Container.defaultProps = {
  mx: 'auto'
}

export default Container
