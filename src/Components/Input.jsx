import React, { useState } from 'react'
import styled from 'styled-components'

const InputGroup = styled.div`
  position: relative;
  width: 100%;
`
const InputCon = styled.input`
  padding: 12px 16px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #D5D5D5;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
`
const TogglePassIcon = styled.span`
	z-index: 9999;
	position: absolute;
	top: 30%;
	right: 16px;  cursor: pointer;
`

function Input(props) {
  return (
    <InputGroup>
      <InputCon placeholder={props.placeholder}  type={props.type}/>
      <TogglePassIcon>
        {props.toggleIcon}
      </TogglePassIcon>
    </InputGroup>
  )
}

export default Input