import { useState } from 'react'
import { ContentDown, ContentTop, IconImg, RegisterIn, Seperator, TopDesc, TopText, Form, StyledButton, ErrorPlacer, EndText, InputGroup, TogglePassIcon, InputCon} from './LoginComps'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Register() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const history = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if(password === password2) {
        const response = await axios.post('http://localhost:5000/api/auth/register', { user, email, password, });
        console.log(response)
        history('/login')
      } else {
        console.log('Password entered are not the same.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='Body'>
      <RegisterIn>
        <ContentTop>
          <IconImg src='src\Assets\Icon.svg'></IconImg>
          <TopText>Create ResuMa Account</TopText>
          <TopDesc>Sign in resuMa to experience a powerful resume generator.</TopDesc>
        </ContentTop>
        
        <ContentDown>
          <Seperator/>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputCon placeholder="Username" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            </InputGroup>
            <InputGroup>
              <InputCon placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputGroup>
            <InputGroup>
              <InputCon placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </InputGroup>
            <InputGroup>
              <InputCon placeholder="Confrim password" type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} />
            </InputGroup>

            <StyledButton primary={true} type='submit'>Create account</StyledButton>
            <ErrorPlacer/>
          </Form>
          <EndText>Have an account? <Link to="/login">Login!</Link></EndText>
        </ContentDown>
      </RegisterIn>
    </div>
  )
}

export default Register