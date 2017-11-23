import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Div from './Div'

const Banner = styled(Div)(
  [],
  props => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `${props.src}`
  }),
  space,
  fontSize,
  width,
  color
)

Banner.defaultProps = {}

export default Banner
