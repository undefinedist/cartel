import React from 'react'
import Label from './Label'
import Div from './Div'
import Input from './Input'
import P from './P'

const TextInput = props => (
  <Div {...props}>
    <Label mb={1} children={props.label} />
    {props.text && (
      <P mt={0} mb={2} fontSize={0} color="gray5" wide>
        {props.text}
      </P>
    )}
    <Input type="text" value={props.value} />
  </Div>
)

export default TextInput
