import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Nav() {
    let {eid} = useParams()
    console.log(eid);
  return (
    <div className='nav'>
        <Link to={`/home/${eid}/Dashboard`}>Dashboard</Link>
        <Link to={`/home/${eid}/Allexpenses`}>All expenses</Link>
        <button>Catogary</button>
    </div>
  )
}

export default Nav