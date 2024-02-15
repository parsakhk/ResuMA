import React, { useState } from 'react'
import './Onboarding.css'
import { InputCon, InputGroup, MainContainer, Part, Parts, StyledButton, TitleContainer } from './Comps'
import Heading from '../../Components/Heading'
import Body from '../../Components/BodyText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { Seperator } from '../Login/LoginComps'

function Onboarding() {
  const [showpartone, setShowpartone] = useState(1)
  const handlePartone = async (event) => {
    event.preventDefault()
    setShowpartone(showpartone + 1)
    if(showpartone == 3) {
      setShowpartone("completed.")
    }
    console.log(showpartone)
  }
  return (
    <div className='Body'>
      <MainContainer>
        <TitleContainer><Body text="Step 1 - General information" /></TitleContainer>
        <Parts>
          <Part>
            <Heading text="Full Name"></Heading>
            <InputGroup>
              <InputCon placeholder='Enter your full name here.' type='text' />
              <StyledButton primary={true} style={showpartone === 1 ? {display: 'flex'} : {display:'none'}}>
                <FontAwesomeIcon className='icon' onClick={handlePartone} icon={faArrowAltCircleRight} />
              </StyledButton>
            </InputGroup>
          </Part>
          <Seperator/>
          <Part>
            <Heading text="Birth date"></Heading>
            <InputGroup>
              <InputCon placeholder='Day' type='text' />
              <InputCon placeholder='Month' type='text' />
              <InputCon placeholder='Year' type='text' />
              <StyledButton primary={true} style={showpartone === 2 ? {display: 'flex'} : {display:'none'}}>
                <FontAwesomeIcon className='icon' onClick={handlePartone} icon={faArrowAltCircleRight} />
              </StyledButton>
            </InputGroup>
          </Part>
          <Seperator/>
          <Part>
            <Heading text="Location"></Heading>
            <InputGroup>
              <InputCon placeholder='Example: Tehran, Iran' type='text' />
              <StyledButton primary={true} style={showpartone === 3 ? {display: 'flex'} : {display:'none'}}>
                <FontAwesomeIcon className='icon' onClick={handlePartone} icon={faArrowAltCircleRight} />
              </StyledButton>
            </InputGroup>
          </Part>
        </Parts>
      </MainContainer>
    </div>
  )
}

export default Onboarding