import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import Nav from './Nav'
import Dashboard from './dashboard/Dashboard'

function Home() {
    let {eid} = useParams()
    // console.log(eid);

  return (
    <div className='home'>
        <Nav/>
        <Outlet/>
        
    </div>
  )
}
export default Home