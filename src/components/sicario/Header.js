import React from 'react'
import Box from './Box'
import Flex from './Flex'
import ButtonCircle from './ButtonCircle'
import Logo from './Logo'

const Header = props => (
  <Flex justify="space-between" align="center" bg={props.bg}>
    <Box {...props.logoWrapper}>
      <Logo px={props.logoPx} src={props.src} />
    </Box>
    <Box {...props.btnWrapper}>
      <ButtonCircle {...props.btn}>btn</ButtonCircle>
    </Box>
  </Flex>
)

export default Header
