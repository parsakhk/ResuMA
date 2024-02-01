import React, { useState } from 'react'
import { ContentDown, ContentTop, IconImg, RegisterIn, Seperator, TopDesc, TopText, Form, StyledButton, ErrorPlacer, EndText} from './LoginComps'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usePasswordToggle from '../../Hooks/usePasswordToggle'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Input from '../../Components/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [PasswordInputType, ToggleIcon] = usePasswordToggle()

  const history = useNavigate()
  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password, });
      
      history("/dashboard")
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='Body'>
      <RegisterIn>
        <ContentTop>
          <IconImg src='src\Assets\Icon.svg'></IconImg>
          <TopText>Sign in to ResuMa</TopText>
          <TopDesc>Create your resume and reflect your aspirations</TopDesc>
        </ContentTop>
        
        <ContentDown>
          <Seperator/>
          <Form onSubmit={handleSubmit}>
            <StyledButton primary={true}>
              <FontAwesomeIcon className='icon' icon={faGoogle} />
              Sign in with google</StyledButton>
            <Seperator/>
            <Input placeholder="Email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <Input placeholder="Password" type={PasswordInputType} toggleIcon={ToggleIcon} value={password} onChange={(event) => setPassword(event.target.value)}/>
            <StyledButton primary={false} type='submit'>Sign with email</StyledButton>
            <ErrorPlacer/>
          </Form>
          <EndText>No account? <Link to="/signup">Sign up now!</Link></EndText>
        </ContentDown>
      </RegisterIn>
    </div>
  )
}

export default Login