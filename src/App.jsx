import React from 'react'
import Signup from './component/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from './Login'
import Dashboard from './component/dashboard/Dashboard'
import './App.css'
import AllExpenses from './component/AllExpenses'
import Category from './component/Category'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home/:eid/' element={<Home/>}>
              <Route path='AllExpenses' element={<AllExpenses/>}/>
              <Route path='Dashboard' element={<Dashboard/>}/>
              <Route path='Category' element={<Category/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App