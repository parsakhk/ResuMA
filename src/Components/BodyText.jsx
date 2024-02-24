import React from 'react'
import styled from 'styled-components'

const BodyText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #3E3E3E;
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

function Body(props) {
  return (
    <BodyText style={props.style} onClick={props.onClick}>
      {props.text}
      {props.isIcon === true ? props.icon : ''}
    </BodyText>
  )
}

export default Body