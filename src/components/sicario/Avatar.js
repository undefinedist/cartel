import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderWidth,
  borderRadius,
  borderColor
} from 'styled-system'

const Avatar = styled('img')(
  [],
  props => ({
    height: `${props.size ? props.size : '48px'}`,
    width: `${props.size ? props.size : '48px'}`
  }),
  space,
  fontSize,
  width,
  color,
  borderWidth,
  borderRadius,
  borderColor
)

Avatar.defaultProps = {
  src:
    'https://pbs.twimg.com/profile_images/854537128994275328/nVZX1MEh_400x400.jpg',
  size: '64px',
  borderWidth: 2,
  borderRadius: 9999,
  px: 1,
  py: 1,
  borderColor: 'gray1',
  bg: 'transparent',
  color: 'transparent'
}

export default Avatar
