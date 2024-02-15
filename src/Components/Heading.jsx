import React from 'react'
import styled from 'styled-components'

const HeadingTitle = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #3E3E3E;
    margin: 0;
`

function Heading(props) {
  return (
    <HeadingTitle>{props.text}</HeadingTitle>
  )
}

export default Heading