import React, { useState } from 'react'

import { EndContainer, InputCon, InputGroup, MainContainer, Part, Parts, StyledButton, TitleContainer } from './Comps'
import Heading from '../../Components/Heading'
import Body from '../../Components/BodyText'
import { Seperator } from '../Login/LoginComps'


function WorkExperience(props) {
    const [companyName, setCompanyName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [startMonth, setStartMonth] = useState(0)
    const [startDay, setStartDay] = useState(0)
    const [endMonth, setEndMonth] = useState(0)
    const [endDay, setEndDay] = useState(0)
    const [desc, setDesc] = useState('')

  return (
    <Parts style={props.style}>
        <Part>
            <Heading text="Company Name"></Heading>
            <InputGroup>
              <InputCon placeholder='Enter your company name here.' type='text' onChange={(e) => setCompanyName(e.target.value)} value={companyName} />
            </InputGroup>
        </Part>
          <Seperator/>
        <Part>
            <Heading text="Title"></Heading>
            <InputGroup>
              <InputCon placeholder='Enter your job title.' type='text' onChange={(e) => setJobTitle(e.target.value)} value={jobTitle} />
            </InputGroup>
        </Part>
          <Seperator/>
        <Part>
            <Heading text="Start Date"></Heading>
            <InputGroup>
              <InputCon placeholder='Month' type='text' onChange={(e) => setStartMonth(e.target.value)} value={startMonth}/>
              <InputCon placeholder='Day' type='text' onChange={(e) => setStartDay(e.target.value)} value={startDay}/>
            </InputGroup>
            <Heading text="End Date"></Heading>
            <InputGroup>
              <InputCon placeholder='Month' type='text' onChange={(e) => setEndMonth(e.target.value)} value={endMonth}/>
              <InputCon placeholder='Day' type='text' onChange={(e) => setEndDay(e.target.value)} value={endDay}/>
            </InputGroup>
        </Part>
          <Seperator/>
        <Part>
            <Heading text="Description"></Heading>
            <InputGroup>
              <InputCon placeholder='Say a little bit about your experience' type='text' onChange={(e) => setDesc(e.target.value)} value={desc}/>
            </InputGroup>
        </Part>
    </Parts>
  )
}

export default WorkExperience