import React, { useState } from 'react'
import './Onboarding.css'
import { EndContainer, InputCon, InputGroup, MainContainer, Part, Parts, StyledButton, TitleContainer } from './Comps'
import Heading from '../../Components/Heading'
import Body from '../../Components/BodyText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { Seperator } from '../Login/LoginComps'
import WorkExperience from './WorkExperience'

function Onboarding() {

  // Step hooks
  const [Step, setStep] = useState(1)
  // Step one values
  const [fullName, setFullname] = useState('')
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const [location, setLocation] = useState('')

  const [proceedActive, setprocceedActivate] = useState(false)
  console.log(Step)
  // Functions
  const handleStep = async (event) => {

    event.preventDefault()
    if(ProccedStep() === true) {
      console.log('in procceed step')
      setStep(Step+1)
    } else {
      return ''
    }
    console.log(Step)
  }
  const ProccedStep = async () => {
    if(Step === 1 && fullName.length !==0 && day !==0 && month !== 0 && year !== 0 && location.length !== 0) {
        console.log('set')
        setStep(Step+1)
        return true
    }  else if (Step === 2 && WorkExperience.length >= 1) {
      console.log('set1')
      setStep(Step+1)
      return true
    }
  }

  // Return
  return (
    <div className='Body'>
      <MainContainer>
        <TitleContainer><Body text={Step === 1 && 'Step 1 - General Information' || Step === 2 && 'Step 2 - Work experience'} /></TitleContainer>
        <Parts style={Step === 1 ? {display: 'flex'} : {display: 'none'}}>
          <Part>
            <Heading text="Full Name"></Heading>
            <InputGroup>
              <InputCon placeholder='Enter your full name here.' type='text' onChange={(e) => setFullname(e.target.value)} value={fullName} />
            </InputGroup>
          </Part>
          <Seperator/>
          <Part>
            <Heading text="Birth date"></Heading>
            <InputGroup>
              <InputCon placeholder='Day' type='text' onChange={(e) => setDay(e.target.value)} value={day} />
              <InputCon placeholder='Month' type='text' onChange={(e) => setMonth(e.target.value)} value={month} />
              <InputCon placeholder='Year' type='text' onChange={(e) => setYear(e.target.value)} value={year} />
            </InputGroup>
          </Part>
          <Seperator/>
          <Part>
            <Heading text="Location"></Heading>
            <InputGroup>
              <InputCon placeholder='Example: Tehran, Iran' type='text' onChange={(e) => setLocation(e.target.value)} value={location} />
            </InputGroup>
          </Part>
        </Parts>
        <WorkExperience style={Step === 2 ? {display: 'flex'} : {display: 'none'}}>

        </WorkExperience>
        <EndContainer >
          <Body style={Step === 2 ? {display: 'flex'} : {display: 'none'}} text="Add Another work experience"  isIcon={true} icon={<FontAwesomeIcon icon={faPlusSquare}/>}></Body>
          <Body onClick={handleStep} 
                text="Proceed to next step"
                isIcon={true}
                icon={<FontAwesomeIcon icon={faArrowAltCircleRight}/>}
          >

          </Body>
        </EndContainer>
      </MainContainer>
    </div>
  )
}

export default Onboarding