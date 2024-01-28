import React from 'react'
import { ContentDown, ContentTop, IconImg, RegisterIn, Seperator, TopDesc, TopText, Form, StyledButton, ErrorPlacer, EndText} from './LoginComps'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usePasswordToggle from '../../Hooks/usePasswordToggle'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Input from '../../Components/Input'
import { Link } from 'react-router-dom'

function Login() {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle()
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
          <Form>
            <StyledButton primary={true}>
              <FontAwesomeIcon className='icon' icon={faGoogle} />
              Sign in with google</StyledButton>
            <Seperator/>
            <Input placeholder="Email" type="text" />
            <Input placeholder="Password" type={PasswordInputType} toggleIcon={ToggleIcon}/>
            <StyledButton primary={false}>Sign with email</StyledButton>
            <ErrorPlacer/>
          </Form>
          <EndText>No account? <Link to="/signup">Sign up now!</Link></EndText>
        </ContentDown>
      </RegisterIn>
    </div>
  )
}

export default Login