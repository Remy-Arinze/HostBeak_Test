import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp'
import AddBill from './Pages/AddBill/AddBill'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<SignUp />} />
        <Route path='/addBill' element = {<AddBill />} />
      </Routes>

    </>
  )
}

export default App