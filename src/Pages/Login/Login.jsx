import React from 'react'
import { ContentDown, ContentTop, IconImg, RegisterIn, Seperator, TopDesc, TopText, Form, StyledButton} from './LoginComps'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usePasswordToggle from '../../Hooks/usePasswordToggle'

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
              <FontAwesomeIcon icon="fa-brands fa-google" />
              Sign in with google</StyledButton>
            <Seperator/>

          </Form>
        </ContentDown>
      </RegisterIn>
    </div>
  )
}

export default Login