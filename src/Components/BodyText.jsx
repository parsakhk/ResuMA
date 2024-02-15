import React from 'react'
import styled from 'styled-components'

const BodyText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #3E3E3E;
`

function Body(props) {
  return (
    <BodyText>{props.text}</BodyText>
  )
}

export default Body