import React from 'react'
import { ContentDown, ContentTop, IconImg, RegisterIn, Seperator, TopDesc, TopText } from './LoginComps'
import './Login.css'

function Login() {
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
          <h1>Hello</h1>
        </ContentDown>
      </RegisterIn>
    </div>
  )
}

export default Login