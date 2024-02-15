import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home/Home'
import Register from './Pages/Login/Register'
import Login from './Pages/Login/Login'
import Onboarding from './Pages/Onboarding/Onboarding'

function App() {

  return (
    <>
      {/** Main page and its ellipses. */}
      <div className='main-Page'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/onboarding' element={<Onboarding/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
