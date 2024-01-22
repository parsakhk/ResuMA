import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

function App() {

  return (
    <>
      {/** Main page and its ellipses. */}
      <div className='main-Page'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
