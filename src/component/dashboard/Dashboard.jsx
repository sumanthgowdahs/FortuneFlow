import React from 'react'
import { useParams } from 'react-router-dom'
import Addtask from './Addtask'
import TaskList from './TaskkList'

function Dashboard() {
    
  return (
    <div className='dashboard'>
        <Addtask/>
        <TaskList/>
    </div>
  )
}

export default Dashboard